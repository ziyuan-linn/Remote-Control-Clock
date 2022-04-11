const socket = io();

const brightness = document.getElementById("brightness");
const speed = document.getElementById("speed");
const brightnessO = document.getElementById("brightnessO");
const speedO = document.getElementById("speedO");

console.log(brightness);

addEventListener("input", () => {
    socket.emit("input", brightness.value, speed.value);
    brightnessO.innerHTML = brightness.value;
    speed.innerHTML = speed.value;

})