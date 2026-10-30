let message = "How The Web Changed The World";
let letters = 0;

function setup() {
  createCanvas(600, 400);
  textSize(30);
  textAlign(LEFT);
  textFont("cursive");
}

function draw() {
  clear();

  let totalWidth = textWidth(message.substring(0, letters));
  let x = (width - totalWidth) / 2;

  for (let i = 0; i < letters; i++) {
    if (i % 2 == 0) {
      fill(40, 130, 220);
    } else {
      fill(65, 165, 75);
    }

    text(message[i], x, 200);
    x += textWidth(message[i]);
  }

  if (frameCount % 10 == 0) {
    letters++;

    if (letters > message.length) {
      letters = 0;
    }
  }
}