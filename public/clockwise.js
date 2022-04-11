
const socket = io();

socket.on("connect", () => {
    console.log(socket.id);
})

socket.on("output", (bright, spd) => {
    brightness = parseInt(bright);
    clockSpeed = parseInt(spd);
})

let brightness = 0;
let clockSpeed = 0;
let sLength;
let mLength;
let hLength;
let t = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
    sLength = height * 0.47;
    mLength = height * 0.42;
    hLength = height * 0.3;
    
}

function draw() {
    push();
    translate(width / 2, height / 2);
    rotate(-PI / 2);
    stroke(255, 0, 0, 10); 
    background(30);
    blendMode(ADD);
    

    sLength = height * 0.47;
    mLength = height * 0.42;
    hLength = height * 0.3;
    
    for(let inc = 0.01; inc <= 140; inc *= 1.15) {
        strokeWeight(6 + inc * 0.3);
        line(0, 0, sLength * cos(t), sLength * sin(t));

        strokeWeight(14 + inc * 0.3);
        line(0, 0, mLength * cos(t / 60), mLength * sin(t / 60));

        strokeWeight(20 + inc * 0.3);
        line(0, 0, mLength * cos(t / 3600), mLength * sin(t / 3600));
    }

    t += map(clockSpeed, 0, 255, 0, 0.1);
    pop();
    fill(0, 0, 0, map(brightness, 0, 255, 255, 0));
    rect(0, 0, width, height);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}