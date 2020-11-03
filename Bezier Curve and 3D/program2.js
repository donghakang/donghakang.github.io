// Dongha Kang   kangx637

var canvas;
var gl;

var programId;
var program2dId;
var axisBufferId;

var mode = 0;                   // 1 is view mode, 0 is draw mode
var numAngles = 2;              // number of angles
var stepsPerCurve = 4;          // number of steps

// ##########################  VIEW MODE ############################
var viewBufferId;               // Buffer for 3d view mode

var controlPoints3d;            // 2d control Points to 3D view mode

var angle = mat4();             // angle for mMatrix
var moveX, moveY;
var theta = 0;
var phi = 0;
var old_x, old_y;

var pMatrix = flatten(mat4());  // initial projection Matrix
var s = 0.5;
var mMatrix = flatten(mat4());  // initial motion Matrix

var vertexCount = [];           // final matrix for 3d mode

// ##########################  DRAW MODE ############################
var pointBufferId;              // Buffer for points
var locationBufferId;
var bezierBufferId;             // Buffer for Bezier Curve

var controlPoints;              // To change Points in Draw mode
var locationOfPoint;            // location of the point in Draw mode
var bool_point = false;         // boolean for whether it is pressing the point


// Binds "on-change" events for the controls on the web page
function initControlEvents() {
    // Use one event handler for both of the shape controls
    document.getElementById("numAngles").onchange =
    document.getElementById("stepsPerCurve").onchange =
        function(e) {
            numAngles = parseFloat(document.getElementById("numAngles").value);
            stepsPerCurve = parseFloat(document.getElementById("stepsPerCurve").value);
            // Regenerate the vertex data
            vertexCount = buildSurfaceOfRevolution(getControlPoints(), numAngles, stepsPerCurve);
        };
}

//The method that responds to the 'View/Draw' button click to change the mode.
function selectMode() {
    var elem = document.getElementById("myButton1");
    if (elem.value=="View Mode") {
        document.getElementById("demo").innerHTML = "View Mode";
        document.getElementById('anglesDiv').style.visibility = 'visible';
        document.getElementById('stepsDiv').style.visibility = 'visible';
        elem.value = "Draw Mode";
        mode = 1;

        // Regenerate the vertex data
        vertexCount = buildSurfaceOfRevolution(getControlPoints(), numAngles, stepsPerCurve);

    } else {
        document.getElementById("demo").innerHTML = "Draw Mode";
        document.getElementById('anglesDiv').style.visibility = 'hidden';
        document.getElementById('stepsDiv').style.visibility = 'hidden';
        elem.value = "View Mode";
        mode = 0;
    }
}

// ########### Binds events for keyboard and mouse events --- ADD CODE HERE ###########
function initWindowEvents() {

    // Whether or not the mouse button is currently being held down for a drag.
    var mousePressed = false;

    canvas.onmousedown = function(e) {
        // A mouse drag started.
        mousePressed = true;
        // console.log('x = ' + e.clientX);
        // console.log('y = ' + e.clientY);

        // Differentiate between view mode and draw mode
        if (mode == 1) {
            // Handle mouse down for view mode
            // setting up the old value to use in drag function
            old_x = e.clientX;
            old_y = e.clientY;

        } else {
            // Handle mouse down for draw mode
            // grab a point and decide whether or not it is a point.
            isPoint(e.clientX, e.clientY);

        }
    }

    canvas.onmousemove = function(e) {
        if (mousePressed) {
            // Differentiate between view mode and draw mode
            if (mode == 1) {
                // Handle a mouse drag for view mode
                moveX = (e.clientX-old_x)*2*Math.PI/canvas.width;
                moveY = (e.clientY-old_y)*2*Math.PI/canvas.height;
                theta += moveX*50;
                phi += moveY*50;
                angle = mult(rotateX(phi), rotateY(theta));
                old_x = e.clientX, old_y = e.clientY;

            } else {
                // Handle a mouse drag for draw mode
                if (bool_point == true) {
                  var x = ((e.clientX-8)-(canvas.width/2))/(canvas.width/2);
                  var y = -1*((e.clientY-52)-(canvas.height/2))/(canvas.height/2);

                  controlPoints[locationOfPoint][0] = x;
                  controlPoints[locationOfPoint][1] = y;

                }
            }
        }
    }

    window.onmouseup = function(e) {
        // A mouse drag ended.
        mousePressed = false;
        // Differentiate between view mode and draw mode
        if (mode == 1) {
            // Handle mouse up for view mode
        } else {
            bool_point = false;
            // Handle mouse up for draw mode
        }
    }

    window.onkeydown = function(e) {
        // Log the key code in the console.  Use this to figure out the key codes for the controls you need.
        console.log(e.keyCode);
        if (e.keyCode == 188) {
          if (s > 0.1) {
            s -= 0.05;
          }
        } else if (e.keyCode == 190) {
          s += 0.05;
        }
    }
}

// take a controlPoint and put the point
function surfaceX(angles, controlPoint) {
  var x = controlPoint[0];    // x --> distance
  var y = controlPoint[1];    // y --> height. does not change
  var returnMatrix = [];
  var temp_Matrix;
  for (var i = 0; i < 360; i = i + 360/angles) {
    // returnMatrix.push(valueY(y, scaleX(x, dimensionChange(rotateY(i))))[0]);
    temp_Matrix = mult(rotateY(i), mat4(x))[0].splice(0,3);
    temp_Matrix[1] = y;
    returnMatrix.push(temp_Matrix);
    //returnMatrix.push(valueY(y, scaleX(x, dimensionChange(rotateY(i))))[0]);
  }
  return returnMatrix;
}

// Draw triangles for drawing
function drawLines (v, angles, steps) {
  var vertices = [];
  var a, b, c, d;
  if (steps == 2) {
    for (var x = 0; x < angles; x ++) {
      if (x == angles - 1) {
        b = v[0][0];
        d = v[1][0];
      } else {
        b = v[0][x+1];
        d = v[1][x+1];
      }
      a = v[0][x];
      c = v[1][x];
      vertices.push(a,b,d);
      vertices.push(a,c,d);
    }
  } else {
    for (var y = 0; y < steps-1; y ++) {
      for (var x = 0; x < angles; x ++) {
        if (x == angles - 1) {
          b = v[y][0];
          d = v[y+1][0];
        } else {
          b = v[y][x+1];
          d = v[y+1][x+1];
        }
        a = v[y][x];
        c = v[y+1][x];
        vertices.push(a,b,d);
        vertices.push(a,c,d);
      }
    }
  }
  return vertices;
}

// Final vertices for viewMethod
function buildSurfaceOfRevolution(controlPoints, angles, steps) {
    var vertices = [];
    var s = Math.floor(100/(steps - 1)) - 1;
    for (var i = 0; i <= 99; i = i + s) {
      vertices.push(surfaceX(angles, bezierCurve(controlPoints)[i]));
    }
    // return vertices;
    return drawLines(vertices, angles, steps);
}


function viewMethod(vertexCount) {
    // Ensure OpenGL viewport is resized to match canvas dimensions
    gl.viewportWidth = canvas.width;
    gl.viewportHeight = canvas.height;

    // Set screen clear color to R, G, B, alpha; where 0.0 is 0% and 1.0 is 100%
    gl.clearColor(0.9, 1.0, 0.9, 1.0);

    // Enable color; required for clearing the screen
    gl.clear(gl.COLOR_BUFFER_BIT);

    // Clear out the viewport with solid black color
    gl.viewport(0, 0, gl.viewportWidth, gl.viewportHeight);

    // Use 3D program
    gl.useProgram(programId);

    var projUniformLocation = gl.getUniformLocation(programId, "projMatrix");
    var viewUniformLocation = gl.getUniformLocation(programId, "viewMatrix");

    pMatrix = flatten(scalem(s,s,s));
    mMatrix = flatten(angle);

    gl.uniformMatrix4fv(projUniformLocation, false, pMatrix);
    gl.uniformMatrix4fv(viewUniformLocation, false, mMatrix);

    var vPosition3d = gl.getAttribLocation(programId, "vPosition3d");
    vertexCount = buildSurfaceOfRevolution(controlPoints, numAngles, stepsPerCurve);
    vertexCount = drawLines(vertexCount, numAngles, stepsPerCurve);
    updateViewBuffer();
    gl.enableVertexAttribArray(vPosition3d);
    gl.vertexAttribPointer(vPosition3d, 3, gl.FLOAT, false, 0, 0);
    gl.drawArrays(gl.LINE_STRIP, 0, vertexCount.length);  // (gl.COMMANDS_, 0, NumVertices)
}


// return current controlPoints
function getControlPoints() {
    return controlPoints;
}

// whether or not the point is grabbing is the point.
function isPoint(e_x, e_y){
  var x = ((e_x-8)-(canvas.width/2))/(canvas.width/2);
  var y = -1*((e_y-52)-(canvas.height/2))/(canvas.height/2);

  for (var i = 0; i < 7; i ++) {
    if (controlPoints[i][0] + 0.03 > x && controlPoints[i][0] - 0.03 < x &&
        controlPoints[i][1] + 0.03 > y && controlPoints[i][1] - 0.03 < y) {
          locationOfPoint = i;
          bool_point = true;
        }
  }
}

// Get Bezier Curve
function bezierCurve(contorlPoints){
  function f1(t) {
    return Math.pow((1-t),3);
  }
  function f2(t) {
    return 3*t*Math.pow((1-t), 2);
  }
  function f3(t) {
    return 3*t*t*(1-t);
  }
  function f4(t) {
    return t*t*t;
  }

  var p1 = controlPoints[0];
  var p2 = controlPoints[1];
  var p3 = controlPoints[2];
  var p4 = controlPoints[3];
  var p5 = controlPoints[4];
  var p6 = controlPoints[5];
  var p7 = controlPoints[6];
  var bezierReturn = [];
  var x;
  var y;

  for (var t = 0.0; t < 1.0; t += 0.02) {
    x = f1(t)*p1[0] + f2(t)*p2[0] + f3(t)*p3[0] + f4(t)*p4[0];
    y = f1(t)*p1[1] + f2(t)*p2[1] + f3(t)*p3[1] + f4(t)*p4[1];
    bezierReturn.push(vec2(x, y));
  }
  for (var t = 0.0; t < 1.0; t += 0.02) {
    x = f1(t)*p4[0] + f2(t)*p5[0] + f3(t)*p6[0] + f4(t)*p7[0];
    y = f1(t)*p4[1] + f2(t)*p5[1] + f3(t)*p6[1] + f4(t)*p7[1];
    bezierReturn.push(vec2(x, y));
  }
  return bezierReturn;
}

function drawMethod(controlPoints) {

    // Ensure OpenGL viewport is resized to match canvas dimensions
    gl.viewportWidth = canvas.width;
    gl.viewportHeight = canvas.height;

    // Set screen clear color to R, G, B, alpha; where 0.0 is 0% and 1.0 is 100%
    gl.clearColor(0.9, 1.0, 1.0, 1.0);

    // Enable color; required for clearing the screen
    gl.clear(gl.COLOR_BUFFER_BIT);

    // Clear out the viewport with solid black color
    gl.viewport(0, 0, gl.viewportWidth, gl.viewportHeight);

    // Use 2D program
    gl.useProgram(program2dId);

    // Set line color for "axis of revolution"
    gl.uniform3fv(gl.getUniformLocation(program2dId, "lineColor"), vec3(0.5, 0.5, 0.5));

    // Draw the "axis of revolution"
    var vPosition = gl.getAttribLocation(program2dId, "vPosition");
    gl.bindBuffer(gl.ARRAY_BUFFER, axisBufferId);
    gl.enableVertexAttribArray(vPosition);
    gl.vertexAttribPointer(vPosition, 2, gl.FLOAT, false, 0, 0);
    gl.drawArrays(gl.LINES, 0, 20);  // (gl.COMMANDS_, 0, NumVertices)

    // Press then color changes
    var pointLocation = gl.getAttribLocation(program2dId, "vPosition");
    for (var i = 0; i < controlPoints.length; i ++ ){
      gl.bindBuffer(gl.ARRAY_BUFFER, locationBufferId);
      gl.bufferData(gl.ARRAY_BUFFER, flatten(controlPoints[i]), gl.DYNAMIC_DRAW);
      gl.enableVertexAttribArray(pointLocation);
      gl.vertexAttribPointer(pointLocation, 2, gl.FLOAT, false, 0, 0);
      if (bool_point == true && i == locationOfPoint) {
        gl.uniform3fv(gl.getUniformLocation(program2dId, "lineColor"), vec3(0.0, 1.0 ,0.0));
      } else {
        gl.uniform3fv(gl.getUniformLocation(program2dId, "lineColor"), vec3(0.0,0.0,0.0));
      }
      gl.drawArrays(gl.POINTS, 0, 1);
    }

    // Gray Lines
    var pointPosition = gl.getAttribLocation(program2dId, "vPosition");
    updatePointBuffer();
    gl.enableVertexAttribArray(pointPosition);
    gl.vertexAttribPointer(pointPosition, 2, gl.FLOAT, false, 0, 0);
    // lines through control Points are Gray
    gl.uniform3fv(gl.getUniformLocation(program2dId, "lineColor"), vec3(0.6,0.6,0.6));
    gl.drawArrays(gl.LINE_STRIP, 0, 7);

    // Bezier Curve
    var bezierPosition = gl.getAttribLocation(program2dId, "vPosition");
    updateBezierBuffer();
    gl.enableVertexAttribArray(bezierPosition);
    gl.vertexAttribPointer(bezierPosition, 2, gl.FLOAT, false, 0, 0);
    gl.uniform3fv(gl.getUniformLocation(program2dId, "lineColor"), vec3(0.0,0.0,0.0));
    gl.drawArrays(gl.LINE_STRIP, 0, 100);  // (gl.COMMANDS_, 0, NumVertices)

}


// Called automatically every 33 milliseconds to render the scene
function render() {
    if (mode == 1) {
        viewMethod(vertexCount);
    } else {
        drawMethod(getControlPoints());
    }
}

function updatePointBuffer() {
  gl.bindBuffer(gl.ARRAY_BUFFER, pointBufferId);
  gl.bufferData(gl.ARRAY_BUFFER, flatten(controlPoints), gl.DYNAMIC_DRAW);
}

function updateBezierBuffer() {
  gl.bindBuffer(gl.ARRAY_BUFFER, bezierBufferId);
  gl.bufferData(gl.ARRAY_BUFFER, flatten(bezierCurve(controlPoints)), gl.DYNAMIC_DRAW);
}

function updateViewBuffer() {
  gl.bindBuffer(gl.ARRAY_BUFFER, viewBufferId);
  gl.bufferData(gl.ARRAY_BUFFER, flatten(vertexCount), gl.DYNAMIC_DRAW);
}

// Initializations
window.onload = function() {
    // Get initial angles and steps
    numAngles = parseFloat(document.getElementById("numAngles").value);
    stepsPerCurve = parseFloat(document.getElementById("stepsPerCurve").value);

    // Find the canvas on the page
    canvas = document.getElementById("gl-canvas");

    // Initialize a WebGL context
    gl = WebGLUtils.setupWebGL(canvas);
    if (!gl) {
        alert("WebGL isn't available");
    }

    gl.enable(gl.DEPTH_TEST);

    // Load shaders
    programId = initShaders(gl, "vertex-shader", "fragment-shader");
    program2dId = initShaders(gl, "vertex-shader-2d", "fragment-shader");

    // Setup axis of revolution to be rendered in draw mode
    var revolutionAxis = [];
    for (var i = 0; i < 20; i++) {
        revolutionAxis[i] = vec2(0.0, 2 * i / 19.0 - 1);
    }

    axisBufferId = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, axisBufferId );
    gl.bufferData(gl.ARRAY_BUFFER, flatten(revolutionAxis), gl.DYNAMIC_DRAW);

    // Enable the position attribute for our 2D shader program.

    // Get the hardcoded control points
    controlPoints = [];
    controlPoints[0] = vec2(0.1, -1.0);
    controlPoints[1] = vec2(0.3, -0.8);
    controlPoints[2] = vec2(0.4, -0.4);
    controlPoints[3] = vec2(0.45,  0.0);
    controlPoints[4] = vec2(0.5,  0.4);
    controlPoints[5] = vec2(0.7,  0.8);
    controlPoints[6] = vec4(0.9,  1.0);

    // ###### Create vertex buffer objects --- ADD CODE HERE ######
    // ==========================================================

    pointBufferId = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, pointBufferId);
    gl.bufferData(gl.ARRAY_BUFFER, flatten(controlPoints), gl.DYNAMIC_DRAW);

    bezierBufferId = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, bezierBufferId);
    gl.bufferData(gl.ARRAY_BUFFER, flatten(bezierCurve(controlPoints)), gl.DYNAMIC_DRAW);

    locationBufferId = gl.createBuffer();

    // view mode kinda starts here.
    vertexCount = buildSurfaceOfRevolution(controlPoints, numAngles, stepsPerCurve);
    viewBufferId = gl.createBuffer();

    // Set up events for the HTML controls
    initControlEvents();

    // Setup mouse and keyboard input
    initWindowEvents();

    // Start continuous rendering
    window.setInterval(render, 33);
};
