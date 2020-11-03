const cursor_speed = 530;
const typing_speed = 120;
const erasing_speed = 300;
var i = 0;
var text = "Hello, World"
var text2 = "Hello, it's Dongha!"


var isCursor = true;

// cursor
function cursorBlink() {
    if (isCursor) {
        document.getElementById("cursor").style.backgroundColor = "white"
        isCursor = !isCursor;
    } else {
        document.getElementById("cursor").style.backgroundColor = "black";
        isCursor = !isCursor;
    }
}

// typing
function start() {
    if (i <= text.length) {
        i++;
        document.getElementById("intro_text").innerHTML = text.substring(0, i);
    } else {
        clearInterval(typingIntervalId)
        setTimeout(function () { }, 1000);     // delay
        var erasing = setInterval(function () {
            // erasing
            i--;
            document.getElementById("intro_text").innerHTML = text.substring(0, i);
            if (i == 6) {
                clearInterval(erasing);
                // re-writing
                var rewriting = setInterval(function () {
                    i++;
                    document.getElementById("intro_text").innerHTML = text2.substring(0, i);
                    if (i > text2.length) {
                        clearInterval(rewriting);
                    }
                }, typing_speed)
            }
        }, erasing_speed);
    }
}

var typingIntervalId = setInterval(start, typing_speed);
var cursorIntervalId = setInterval(cursorBlink, cursor_speed);
