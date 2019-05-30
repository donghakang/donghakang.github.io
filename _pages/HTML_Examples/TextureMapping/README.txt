This download is a template that is intended to help you get started on Program 3 in CSCI 4611.  It essentially consists of a solution to the previous assignment (Program 2).

There are a few key ways in which this template differs from a solution to Program 2:
    - Draw mode has been removed and replaced with a drop-down list of five presets.  This was done to make testing easier for you.  This change results in a different implementation of getControlPoints(), but the code structure is otherwise the same.
    - gl.drawArrays() is called using gl.TRIANGLES rather than gl.LINES, and the vertex buffer is structured accordingly to support triangle drawing rather than line drawing.
    - A drop-down menu has been added to support multiple materials.  Along with this menu, a stub for a function called updateMaterial() has been added to the JavaScript file.  This function is set up to be called whenever the material changes in the drop-down menu.  It accepts the name of the material as a parameter, which will be one of "plastic", "brass", or "texture".  You can add whatever handler code you need to this function to support a material change.  A function called getMaterial() has also been written that will allow you to get the name of the current material from anywhere else in your code.
    - The canvas.onmousemove event handler has been expanded to include detection of whether or not the Shift key is down.  This has been done to help you implement the light controls.

As before, there are two files that you will need to edit to implement your solution: program3.html and program3.js.  However, please turn in all of the supporting files with your solution to make grading easier.
    