
function setup() {
  createCanvas(400, 400);
  noLoop();
}

function draw() {
  clear();

  // Ocean
  noStroke();
  fill(40, 130, 220);
  circle(200, 200, 260);

  // Continents
  fill(65, 165, 75);

  // North America
  ellipse(140, 145, 85, 65);
  ellipse(155, 175, 40, 35);

  // South America
  ellipse(175, 240, 35, 100);

  // Europe and Africa
  ellipse(235, 145, 55, 35);
  ellipse(235, 215, 48, 95);

  // Asia
  ellipse(285, 145, 85, 55);

  // Australia
  ellipse(290, 270, 40, 25);
}






