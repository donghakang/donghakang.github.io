var canvas;
var gl;
var programId;

var numAngles = 3;
var stepsPerCurve = 6;
var shape = "profile1";

var texture_tile;
var texture_wood;

// The OpenGL ID of the vertex buffer containing the current shape
var positionBufferId;
var normalBufferId;
var textureBufferId;

// The number of vertices in the current vertex buffer
var vertexCount;

var light_theta;          // to calculate theta for light
var light_phi;            // to calculate phi for light

var lightPosition = vec4(1.0, 1.0, 1.0, 0.0 );
var lightAmbient = vec4(0.2, 0.2, 0.2, 1.0 );
var lightDiffuse = vec4( 1.0, 1.0, 1.0, 1.0 );
var lightSpecular = vec4( 1.0, 1.0, 1.0, 1.0 );

var materialAmbient = vec4(1, 1, 0, 1);
var materialDiffuse = vec4(1, 1, 0, 1);
var materialSpecular = vec4(.4, .4, .2, 1);
var materialShininess = 128 * .25;

var ambientColor, diffuseColor, specularColor;
var modelView, projection;

// Binds "on-change" events for the controls on the web page
function initControlEvents() {
    // Use one event handler for all of the shape controls
    document.getElementById("shape-select").onchange =
    document.getElementById("numAngles").onchange =
    document.getElementById("stepsPerCurve").onchange =
        function(e) {
            shape = document.getElementById("shape-select").value;
            numAngles = parseFloat(document.getElementById("numAngles").value);
            stepsPerCurve = parseFloat(document.getElementById("stepsPerCurve").value);

            // Regenerate the vertex data
            vertexCount = buildSurfaceOfRevolution(getcontrolPoints(), numAngles, stepsPerCurve);
        };

    // Event handler for the material control
    document.getElementById("material").onchange =
        function(e) {
            updateMaterial(getMaterial());
        }
}

// The current view matrix
var viewMatrix;

// Sets up keyboard and mouse events
function initWindowEvents() {

    // Whether or not the mouse button is currently being held down for a drag.
    var mousePressed = false;

    // Affects how much the camera moves when the mouse is dragged.
    var sensitivity = 0.01;

    var theta = 0, phi = 0, radius = 5;
    var light_theta = 1.0, light_phi = 1.0, light_radius = 1;

    // The place where a mouse drag was started.
    var prevX, prevY;

    var grabbedPoint;

    canvas.onmousedown = function(e) {
        // A mouse drag started.
        mousePressed = true;

        // Remember where the mouse drag started.
        prevX = e.clientX;
        prevY = e.clientY;
    }

    canvas.onmousemove = function(e) {
        if (mousePressed) {

            if (e.shiftKey) {
                // Handle light movement here.
                light_theta -= (e.clientX - prevX) * sensitivity;
                light_phi -= (e.clientY - prevY) * sensitivity;
                if (light_theta < -2 * Math.PI) {
                    light_theta += 2 * Math.PI;
                } else if (light_theta > 2 * Math.PI) {
                    light_theta -= 2 * Math.PI;
                }

                if (light_phi < -Math.PI / 2) {
                    light_phi = -Math.PI / 2;
                } else if (light_phi > Math.PI / 2) {
                    light_phi = Math.PI / 2;
                }

                lightPosition = vec4(light_radius * Math.cos(light_theta) * Math.cos(light_phi),
                     light_radius * Math.sin(light_phi),
                     light_radius * Math.sin(light_theta) * Math.cos(light_phi),0);

                gl.uniform4fv(gl.getUniformLocation(programId, "LightPosition"),
                  flatten(lightPosition) );
            } else {

                // Handle a mouse drag
                theta += (e.clientX - prevX) * sensitivity;
                phi += (e.clientY - prevY) * sensitivity;

                if (theta < -2 * Math.PI) {
                    theta += 2 * Math.PI;
                } else if (theta > 2 * Math.PI) {
                    theta -= 2 * Math.PI;
                }

                if (phi < -Math.PI / 2) {
                    phi = -Math.PI / 2;
                } else if (phi > Math.PI / 2) {
                    phi = Math.PI / 2;
                }

                // Update the model-view matrix.
                gl.useProgram(programId);
                updateModelView(lookAt(
                    vec3(radius * Math.cos(theta) * Math.cos(phi),
                         radius * Math.sin(phi),
                         radius * Math.sin(theta) * Math.cos(phi)),
                    vec3(0), vec3(0, 1, 0)));
            }

            prevX = e.clientX;
            prevY = e.clientY;
        }
    }

    window.onmouseup = function(e) {
        // A mouse drag ended.
        mousePressed = false;
    }

    var speed = 0.1; // Affects how fast the camera "zooms"

    window.onkeydown = function(e) {

        if (e.keyCode === 190) { // '>' key
            // "Zoom" in
            radius -= speed;
        }
        else if (e.keyCode === 188) { // '<' key
            // "Zoom" out
            radius += speed;
        }

        // Update the model-view matrix.
        gl.useProgram(programId);
        updateModelView(lookAt(
            vec3(radius * Math.cos(theta) * Math.cos(phi),
                 radius * Math.sin(phi),
                 radius * Math.sin(theta) * Math.cos(phi)),
            vec3(0), vec3(0, 1, 0)));
    }
}

function getcontrolPoints1() {

    var controlPoints = [];

    // Initialize control point data
    for (var i = 0; i < 7; i++)
    {
        controlPoints[i] = vec4(0.5, i / 6.0 * 1.6 - 0.8, 0, 1);
    }

    return controlPoints;
}

function getcontrolPoints2() {

    var controlPoints = [];
    controlPoints[0] = vec4(0.1, -1.0, 0.0, 1);
    controlPoints[1] = vec4(0.3, -0.8, 0.0, 1);
    controlPoints[2] = vec4(0.4, -0.4, 0.0, 1);
    controlPoints[3] = vec4(0.45,  0.0, 0.0, 1);
    controlPoints[4] = vec4(0.5,  0.4, 0.0, 1);
    controlPoints[5] = vec4(0.7,  0.8, 0.0, 1);
    controlPoints[6] = vec4(0.9,  1.0, 0.0, 1);
    return controlPoints;
}

function getcontrolPoints3() {

    var controlPoints = [];
    controlPoints[0] = vec4(0.9, -1.0, 0.0, 1);
    controlPoints[1] = vec4(0.7, -0.8, 0.0, 1);
    controlPoints[2] = vec4(0.5, -0.4, 0.0, 1);
    controlPoints[3] = vec4(0.5,  0.0, 0.0, 1);
    controlPoints[4] = vec4(0.5,  0.4, 0.0, 1);
    controlPoints[5] = vec4(0.7,  0.8, 0.0, 1);
    controlPoints[6] = vec4(0.9,  1.0, 0.0, 1);
    return controlPoints;
}

function getcontrolPoints4() {

    var controlPoints = [];
    controlPoints[0] = vec4(0.1, -1.0, 0.0, 1);
    controlPoints[1] = vec4(0.5, -0.8, 0.0, 1);
    controlPoints[2] = vec4(0.7, -0.4, 0.0, 1);
    controlPoints[3] = vec4(0.7,  0.0, 0.0, 1);
    controlPoints[4] = vec4(0.7,  0.4, 0.0, 1);
    controlPoints[5] = vec4(0.5,  0.8, 0.0, 1);
    controlPoints[6] = vec4(0.1,  1.0, 0.0, 1);
    return controlPoints;
}

function getcontrolPoints5() {

    var controlPoints = [];
    controlPoints[0] = vec4(0.1, -1.0, 0.0, 1);
    controlPoints[1] = vec4(0.5, -0.8, 0.0, 1);
    controlPoints[2] = vec4(0.3, -0.4, 0.0, 1);
    controlPoints[3] = vec4(0.2,  0.0, 0.0, 1);
    controlPoints[4] = vec4(0.1,  0.4, 0.0, 1);
    controlPoints[5] = vec4(0.1,  0.8, 0.0, 1);
    controlPoints[6] = vec4(0.1,  1.0, 0.0, 1);
    return controlPoints;
}

function getcontrolPoints() {

    if (shape == "profile1") {
        return getcontrolPoints1()
    }
    else if (shape == "profile2") {
        return getcontrolPoints2()
    }
    else if (shape == "profile3") {
        return getcontrolPoints3()
    }
    else if (shape == "profile4") {
        return getcontrolPoints4()
    }
    else if (shape == "profile5") {
        return getcontrolPoints5()
    }
}

function getTVector(vt)
{
    // Compute value of each basis function
    var mt = 1.0 - vt;
    return vec4(mt * mt * mt, 3 * vt * mt * mt, 3 * vt * vt * mt, vt * vt * vt);
}

function dotProduct(pnt1, pnt2, pnt3, pnt4, tVal)
{
    // Take dot product between each basis function value and the x, y, and z values
    // of the control points
    return vec3(pnt1[0]*tVal[0] + pnt2[0]*tVal[1] + pnt3[0]*tVal[2] + pnt4[0]*tVal[3],
                pnt1[1]*tVal[0] + pnt2[1]*tVal[1] + pnt3[1]*tVal[2] + pnt4[1]*tVal[3],
                pnt1[2]*tVal[0] + pnt2[2]*tVal[1] + pnt3[2]*tVal[2] + pnt4[2]*tVal[3]);
}


function buildSurfaceOfRevolution(controlPoints, angles, steps)
{
    if (steps % 2 == 1) {
        steps++;
    }

    var dt = 2.0 / steps;
    var da = 360.0 / (angles);

    var vertices = [];
    var normals = [];
    var tex_coords = [];
    var p = 0;

    var t1, t2, t3, t4, normal;
    var vertices_a, vertices_b, vertices_c, vertices_d;

    var new_t;      // texture

    for (var i = 0; i < 2; i++)
    {
        var bp1 = controlPoints[i * 3 + 0];   // a
        var bp2 = controlPoints[i * 3 + 1];   // b
        var bp3 = controlPoints[i * 3 + 2];   // c
        var bp4 = controlPoints[i * 3 + 3];   // d

        for (var t = 0; t < steps / 2; t++) {
            var p1 = dotProduct(bp1, bp2, bp3, bp4, getTVector(t * dt));
            var p2 = dotProduct(bp1, bp2, bp3, bp4, getTVector((t + 1) * dt));
            // var normal = cross(p1, p2);
            // var normal = vec3(normal);
            new_t = t + (i*steps/2);

            var savedP = p;
            for (var a = 0; a < angles; a++) {
                // b
                vertices[p] = vec3(Math.cos(a * da * Math.PI / 180.0) * p1[0], p1[1],
                                     Math.sin(a * da * Math.PI / 180.0) * p1[0]);
                vertices_b = vertices[p];
                tex_coords[p] = vec2(1-a/angles, 1-new_t/steps);  // texture mapping
                p++;

                // a
                vertices[p] = vec3(Math.cos(a * da * Math.PI / 180.0) * p2[0], p2[1],
                                     Math.sin(a * da * Math.PI / 180.0) * p2[0]);
                vertices_a = vertices[p];
                tex_coords[p] = vec2(1-a/angles,1-(new_t+1)/steps);
                p++;

                // c
                vertices[p] = vec3(Math.cos((a + 1) * da * Math.PI / 180.0) * p1[0], p1[1],
                                     Math.sin((a + 1) * da * Math.PI / 180.0) * p1[0]);
                vertices_c = vertices[p];
                tex_coords[p] = vec2(1-(a+1)/angles,1-new_t/steps);
                p++;

                // c
                vertices[p] = vec3(Math.cos((a + 1) * da * Math.PI / 180.0) * p1[0], p1[1],
                                     Math.sin((a + 1) * da * Math.PI / 180.0) * p1[0]);
                vertices_c = vertices[p];
                tex_coords[p] = vec2(1-(a+1)/angles,1-new_t/steps);
                p++;

                // a
                vertices[p] = vec3(Math.cos(a * da * Math.PI / 180.0) * p2[0], p2[1],
                                     Math.sin(a * da * Math.PI / 180.0) * p2[0]);
                vertices_a = vertices[p];
                tex_coords[p] = vec2(1-a/angles,1-(new_t+1)/steps);
                p++;

                // d
                vertices[p] = vec3(Math.cos((a + 1) * da * Math.PI / 180.0) * p2[0], p2[1],
                                     Math.sin((a + 1) * da * Math.PI / 180.0) * p2[0]);
                vertices_d = vertices[p];
                tex_coords[p] = vec2(1-(a+1)/angles,1-(new_t+1)/steps);
                p++;

                // normal
                t1 = subtract(vertices_b, vertices_c);
                t2 = subtract(vertices_a, vertices_b);
                normal = normalize(cross(t1, t2));
                normal = vec3(normal);
                normals.push(normal);
                normals.push(normal);
                normals.push(normal);
                normals.push(normal);
                normals.push(normal);
                normals.push(normal);
            }
        }
    }

    // Pass the new set of vertices to the graphics card
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBufferId );
    gl.bufferData(gl.ARRAY_BUFFER, flatten(vertices), gl.DYNAMIC_DRAW);

    gl.bindBuffer(gl.ARRAY_BUFFER, normalBufferId);
    gl.bufferData(gl.ARRAY_BUFFER, flatten(normals), gl.DYNAMIC_DRAW);

    gl.bindBuffer(gl.ARRAY_BUFFER, textureBufferId);
    gl.bufferData(gl.ARRAY_BUFFER, flatten(tex_coords), gl.STATIC_DRAW);
    return vertices.length;
}

// Render the scene
function viewMethod(vertexCount) {
    // Clear the canvas
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    // Use 3D program
    gl.useProgram(programId);

    // Associate vertex buffers with vertex attributes
    var vPosition = gl.getAttribLocation(programId, "vPosition");
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBufferId);
    gl.vertexAttribPointer(vPosition, 3, gl.FLOAT, false, 0, 0);

    // Draw the triangles
    var vNormal = gl.getAttribLocation(programId, "vNormal");
    gl.bindBuffer(gl.ARRAY_BUFFER, normalBufferId);
    gl.vertexAttribPointer(vNormal, 3, gl.FLOAT, false, 0, 0);

    var vTexCoord = gl.getAttribLocation(programId, "vTexCoord");
    gl.bindBuffer(gl.ARRAY_BUFFER, textureBufferId);
    gl.vertexAttribPointer(vTexCoord, 2, gl.FLOAT, false, 0, 0);

    gl.drawArrays(gl.TRIANGLES, 0, vertexCount);
}

function render() {
    viewMethod(vertexCount);
}

// The locations of the required GLSL uniform variables.
var locations = {};

// Looks up the locations of uniform variables once.
function findShaderVariables() {
    locations.modelView = gl.getUniformLocation(programId, "modelView");
    locations.projection = gl.getUniformLocation(programId, "projection");
    locations.triangleColor = gl.getUniformLocation(programId, "triangleColor");
}

// Pass an updated model-view matrix to the graphics card.
function updateModelView(modelView) {
    gl.uniformMatrix4fv(locations.modelView, false, flatten(modelView));
}

// Pass an updated projection matrix to the graphics card.
function updateProjection(projection) {
    gl.uniformMatrix4fv(locations.projection, false, flatten(projection));
}

// Function for querying the current material
// Returns "plastic", "brass", or "texture"
function getMaterial() {
    return document.getElementById("material").value;
}

function yellowPlastic() {
  gl.uniform1i(gl.getUniformLocation( programId, "textureOn"), 0);
  materialAmbient = vec4(1, 1, 0, 1);
  materialDiffuse = vec4(1, 1, 0, 1);
  materialSpecular = vec4(.4, .4, .2, 1);
  materialShininess = 128 * .25;
}

function brassMetal() {
  gl.uniform1i(gl.getUniformLocation( programId, "textureOn"), 0);
  materialAmbient = vec4( 1.0, 0.0, 1.0, 1.0 );
  materialDiffuse = vec4( 0.780, 0.569, 0.114, 1.0);
  materialSpecular = vec4( 0.992, 0.941, 0.808, 1.0 );
  materialShininess = 128 * .25;
}

function textureMaterial() {
  gl.uniform1i(gl.getUniformLocation( programId, "textureOn"), 1);
  materialAmbient = vec4( 1.0, 1.0, 1.0, 1.0);
  materialDiffuse = vec4( 1.0, 1.0, 1.0, 1.0);
  materialSpecular = vec4( 1.0, 1.0, 1.0, 1.0 );
  materialShininess = 128 * .25;
}


function updateColor() {
  var ambientProduct = mult(lightAmbient, materialAmbient);
  var diffuseProduct = mult(lightDiffuse, materialDiffuse);
  var specularProduct = mult(lightSpecular, materialSpecular);

  gl.uniform4fv(gl.getUniformLocation(programId, "AmbientProduct"),
     flatten(ambientProduct));
  gl.uniform4fv(gl.getUniformLocation(programId, "DiffuseProduct"),
     flatten(diffuseProduct) );
  gl.uniform4fv(gl.getUniformLocation(programId, "SpecularProduct"),
     flatten(specularProduct) );
  gl.uniform4fv(gl.getUniformLocation(programId, "LightPosition"),
     flatten(lightPosition) );

  gl.uniform1f(gl.getUniformLocation(programId,
     "Shininess"),materialShininess);
}


// Function called when the material changes
// Parameter will be one of "plastic", "brass", or "texture"
function updateMaterial(material) {

    // Add your code here to handle a material change.
    if (material == "plastic") {
      yellowPlastic();
    } else if (material == "brass") {
        brassMetal();
    } else if (material == "texture") {
        textureMaterial();
    }

    updateColor();
}

window.onload = function() {

    // Get initial angles and steps
    numAngles = parseFloat(document.getElementById("numAngles").value);
    stepsPerCurve = parseFloat(document.getElementById("stepsPerCurve").value);

    texture_tile = document.getElementById("tile-img");
    texture_wood = document.getElementById("wood-img");
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
    gl.useProgram(programId);

    // Configure WebGL
    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.clearColor(0.7, 0.9, 0.7, 1.0);

    normalBufferId = gl.createBuffer();
    positionBufferId = gl.createBuffer();
    textureBufferId = gl.createBuffer();

    gl.uniform1i(gl.getUniformLocation( programId, "textureOn"), 0);
    //
    var vNormal = gl.getAttribLocation(programId, "vNormal");
    // gl.vertexAttribPointer( vNormal, 3, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(vNormal);

    var vTexCoord = gl.getAttribLocation(programId, "vTexCoord");
    gl.enableVertexAttribArray(vTexCoord);
    var texture = gl.createTexture();
    gl.activeTexture( gl.TEXTURE0 );
    gl.bindTexture( gl.TEXTURE_2D, texture );
    gl.uniform1i(gl.getUniformLocation( programId, "texMap"), 0);
    gl.texImage2D( gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, texture_tile);

    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);

    gl.texParameteri( gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE );
    gl.texParameteri( gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE );
    gl.texParameteri( gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST );
    gl.texParameteri( gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST );

    // Create a vertex buffer object for position
    positionBufferId = gl.createBuffer();

    // Enable the shader variable for position for use with a vertex buffer.
    var vPosition = gl.getAttribLocation(programId, "vPosition");
    gl.enableVertexAttribArray(vPosition);



    // Find all of the shader uniform variables that we need.
    findShaderVariables();

    // Initialize the view matrix
    viewMatrix = lookAt(vec3(0,0,5), vec3(0,0,0), vec3(0,1,0));
    updateModelView(viewMatrix);

    // Initialize the projection matrix
    updateProjection(perspective(50, 1.28, 0.01, 100));

    // Initialize the triangle color
    gl.uniform3fv(locations.color, vec4(0,1,0,1));

    updateColor();

    // Create the surface of revolution
    // (this should load the initial shape into one of the vertex buffer objects you just created)
    vertexCount = buildSurfaceOfRevolution(getcontrolPoints(), numAngles, stepsPerCurve);

    // Set up events for the HTML controls
    initControlEvents();

    // Setup mouse and keyboard input
    initWindowEvents();
    //

    // console.log(getMaterial());
    // Start continuous rendering
    window.setInterval(render, 3);
};
