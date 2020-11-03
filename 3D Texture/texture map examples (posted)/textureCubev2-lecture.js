"use strict";

var canvas;
var gl;

var numVertices  = 36;

// Create a checkerboard pattern
var texSize = 64;
var numRows = 8;
var numCols = 8;

var myTexels = new Uint8Array(4*texSize*texSize);

for (var i = 0; i < texSize; ++i) {
  for (var j = 0; j < texSize; ++j) {
     var patchx = Math.floor(i/(texSize/numRows));
     var patchy = Math.floor(j/(texSize/numRows));

     var c = (patchx%2 !== patchy%2 ? 255 : 0);

     myTexels[4*i*texSize+4*j]     = c;
     myTexels[4*i*texSize+4*j+1]   = c;
     myTexels[4*i*texSize+4*j+2]   = c; 
     myTexels[4*i*texSize+4*j+3]   = 255;
  }
}


var pointsArray = [];
var colorsArray = [];

var vertices = [
    vec4( -0.5, -0.5,  0.5, 1.0 ),
    vec4( -0.5,  0.5,  0.5, 1.0 ),
    vec4( 0.5,  0.5,  0.5, 1.0 ),
    vec4( 0.5, -0.5,  0.5, 1.0 ),
    vec4( -0.5, -0.5, -0.5, 1.0 ),
    vec4( -0.5,  0.5, -0.5, 1.0 ),
    vec4( 0.5,  0.5, -0.5, 1.0 ),
    vec4( 0.5, -0.5, -0.5, 1.0 )
];


var vertexColors = [
    vec4( 0.0, 0.0, 0.0, 1.0 ),  // black
    vec4( 1.0, 0.0, 0.0, 1.0 ),  // red
    vec4( 1.0, 1.0, 0.0, 1.0 ),  // yellow
    vec4( 0.0, 1.0, 0.0, 1.0 ),  // green
    vec4( 0.0, 0.0, 1.0, 1.0 ),  // blue
    vec4( 1.0, 0.0, 1.0, 1.0 ),  // magenta
    vec4( 0.0, 1.0, 1.0, 1.0 ),  // white
    vec4( 0.0, 1.0, 1.0, 1.0 )   // cyan
];

// add texture coordinate attribute to quad function

var texCoordsArray = [ ];

var texCoord = [vec2(0,0), vec2(0,1), vec2(1,1), vec2(1,0)];

function quad(a, b, c, d) {
    pointsArray.push(vertices[a]);
    colorsArray.push(vertexColors[a]);
    texCoordsArray.push(texCoord[0]);

    pointsArray.push(vertices[b]);
    colorsArray.push(vertexColors[a]);
    texCoordsArray.push(texCoord[1]); 

    pointsArray.push(vertices[c]);
    colorsArray.push(vertexColors[a]);
    texCoordsArray.push(texCoord[2]);

    pointsArray.push(vertices[a]);
    colorsArray.push(vertexColors[a]);
    texCoordsArray.push(texCoord[0]);

    pointsArray.push(vertices[c]);
    colorsArray.push(vertexColors[a]);
    texCoordsArray.push(texCoord[2]);

    pointsArray.push(vertices[d]);
    colorsArray.push(vertexColors[a]);
    texCoordsArray.push(texCoord[3]);
}


window.onload = init;


var xAxis = 0;
var yAxis = 1;
var zAxis = 2;
var axis = xAxis;

var theta = [45.0, 45.0, 45.0];

var modelViewLoc;
var projectionLoc;

function colorCube()
{
    quad( 1, 0, 3, 2 );
    quad( 2, 3, 7, 6 );
    quad( 3, 0, 4, 7 );
    quad( 6, 5, 1, 2 );
    quad( 4, 5, 6, 7 );
    quad( 5, 4, 0, 1 );
}


function init() {
    canvas = document.getElementById( "gl-canvas" );

    gl = WebGLUtils.setupWebGL( canvas );
    if ( !gl ) { alert( "WebGL isn't available" ); }

    gl.viewport( 0, 0, canvas.width, canvas.height );
    gl.clearColor( 1.0, 1.0, 1.0, 1.0 );

    gl.enable(gl.DEPTH_TEST);

    //
    //  Load shaders and initialize attribute buffers
    //
    var program = initShaders( gl, "vertex-shader", "fragment-shader" );
    gl.useProgram( program );

    colorCube();

    var cBuffer = gl.createBuffer();
    gl.bindBuffer( gl.ARRAY_BUFFER, cBuffer);
    gl.bufferData( gl.ARRAY_BUFFER, flatten(colorsArray), gl.STATIC_DRAW );
    var vColor = gl.getAttribLocation( program, "vColor" );
    gl.vertexAttribPointer(vColor, 4, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(vColor);

    var vBuffer = gl.createBuffer();
    gl.bindBuffer( gl.ARRAY_BUFFER, vBuffer);
    gl.bufferData( gl.ARRAY_BUFFER, flatten(pointsArray), gl.STATIC_DRAW);
    var vPosition = gl.getAttribLocation( program, "vPosition" );
    gl.vertexAttribPointer( vPosition, 4, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(vPosition);

    var tBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, tBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, flatten(texCoordsArray),gl.STATIC_DRAW);

    var vTexCoord = gl.getAttribLocation(program, "vTexCoord");
    gl.vertexAttribPointer(vTexCoord, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(vTexCoord);

    var texture = gl.createTexture();

    gl.activeTexture( gl.TEXTURE0 );
    gl.bindTexture( gl.TEXTURE_2D, texture );
    gl.uniform1i(gl.getUniformLocation( program, "texMap"), 0);

    gl.texImage2D( gl.TEXTURE_2D, 0, gl.RGBA, texSize, texSize, 
                                   0, gl.RGBA, gl.UNSIGNED_BYTE, myTexels );

    gl.texParameterf( gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT );
    gl.texParameterf( gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT );
    gl.texParameterf( gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST );
    gl.texParameterf( gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST );

    modelViewLoc = gl.getUniformLocation(program, "modelView");
    projectionLoc = gl.getUniformLocation(program, "projection");

    document.getElementById("ButtonX").onclick = function(){axis = xAxis;};
    document.getElementById("ButtonY").onclick = function(){axis = yAxis;};
    document.getElementById("ButtonZ").onclick = function(){axis = zAxis;};

    render();
}

var render = function() {
    gl.clear( gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    theta[axis] += 2.0;
    
    // Compute the sines and cosines of theta for
    // each of the three axes in one computation.
    var c = [] , s = [];
    for (var i = 0; i < 3; i++) {
        var angle = radians( theta[i] ); // from MV.js
        c[i] = Math.cos( angle );
        s[i] = Math.sin( angle );
    }

    // Remember: these matrices are column-major
    var rx = mat4( 1.0,   0.0,   0.0,  0.0,
                   0.0,  c[0],  s[0],  0.0,
                   0.0, -s[0],  c[0],  0.0,
                   0.0,   0.0,   0.0,  1.0 );
    var ry = mat4( c[1],  0.0, -s[1],  0.0,
                    0.0,  1.0,   0.0,  0.0,
                   s[1],  0.0,  c[1],  0.0,
                    0.0,  0.0,   0.0,  1.0 );    
    var rz = mat4( c[2], -s[2],  0.0,  0.0,
                   s[2],  c[2],  0.0,  0.0,
                    0.0,   0.0,  1.0,  0.0,
                    0.0,   0.0,  0.0,  1.0 );

    var rotation = mult(mult(rz, ry), rx); // from MV.js
    
    var projection = ortho(-1, 1, -1, 1, -100, 100);

    gl.uniformMatrix4fv(modelViewLoc, false, flatten(rotation));
    gl.uniformMatrix4fv(projectionLoc, false, flatten(projection));
    gl.drawArrays( gl.TRIANGLES, 0, numVertices );
    requestAnimFrame(render);
}

