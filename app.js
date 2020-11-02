const intro = document.querySelector(".intro");
const video = intro.querySelector("video");
const text = intro.querySelector("h1");

const section = document.querySelector("section");
const end = section.querySelector("h1");


// SCROLL MAGIC
const controller = new ScrollMagic.Controller();

// Scenes
const scene = new ScrollMagic.Scene({
    duration: 30000,            // duration of the scroll
    triggerElemnt: intro,
    triggerHook: 0              // trigger for a single screen
})
    // .addIndicators()
    .setPin(intro)
    .addTo(controller);

// Video Animation
let acc = 0.1;
let scrollPosition = 0;
let delay = 0;

scene.on('update', e => {
    scrollPosition = e.scrollPos / 1000;  // millisec to seconds
});

setInterval(() => {
    delay += (scrollPosition - delay) * acc;
    // video.currentTime = scrollPosition;
    console.log(scrollPosition, delay);
    video.currentTime = delay;
}, 1000/30);

