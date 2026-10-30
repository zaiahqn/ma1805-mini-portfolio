let img;

function preload() {
  img = loadImage('Globe.png');
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  // Draw the image.
  image(img, 0, 0, 400, 400);
}