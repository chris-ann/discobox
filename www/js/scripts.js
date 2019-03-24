document.addEventListener("deviceready", init, false);

function init() {
    window.addEventListener('deviceorientation', handleOrientation);
}

var r, g, b;
var ax, ay;

function setup() {

    var cnv = createCanvas(displayWidth, displayHeight, WEBGL);
    cnv.parent('myCanvas');

    // default is RADIANS
    angleMode(DEGREES);

}

function draw() {
    background(0);

    // multiply the rotation to make it spin more or less
    rotateX(ax * 10);
    rotateY(ay * 10);

    stroke(255);
    fill(r, g, b);

    box(100, 100, 100);
}


function handleOrientation(event) {

    var x = event.beta
    var y = event.gamma
    var z = event.alpha

    // map acc data to RGB color values
    r = map(x, -180, 180, 0, 255, true);
    g = map(y, -90, 90, 0, 255, true);
    b = map(z, 0, 360, 0, 255, true);

    // map acc data to degree values between 90 and 180
    ax = map(x, -180, 180, 0, 180);
    ay = map(y, -90, 90, 0, 180);

}
