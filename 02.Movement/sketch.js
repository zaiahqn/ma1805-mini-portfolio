let size = 1;
let zoom = 0.001;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  clear();

  // Zoom effect
  push();
  translate(200, 200);
  scale(size);
  translate(-200, -200);

  // Ocean
  noStroke();
  fill(40, 130, 220);
  circle(200, 200, 260);

  // Continents
  fill(65, 165, 75);
  ellipse(140, 145, 85, 65);
  ellipse(155, 175, 40, 35);
  ellipse(175, 240, 35, 100);
  ellipse(235, 145, 55, 35);
  ellipse(235, 215, 48, 95);
  ellipse(285, 145, 85, 55);
  ellipse(290, 270, 40, 25);

  pop();

  // Expansion and shrinking
  size = size + zoom;

  if (size > 1.08 || size < 1) {
    zoom = -zoom;
  }
}

