const socket = io();

const brightness = document.getElementById("brightness");
const speed = document.getElementById("speed");
const background = document.getElementById("background");
const brightnessO = document.getElementById("brightnessO");
const speedO = document.getElementById("speedO");
const backgroundO = document.getElementById("backgroundO");


addEventListener("input", () => {
    socket.emit("input", brightness.value, speed.value, background.value);
    brightnessO.innerHTML = brightness.value;
    speedO.innerHTML = speed.value;
    backgroundO.innerHTML = backgroundO.value;


})