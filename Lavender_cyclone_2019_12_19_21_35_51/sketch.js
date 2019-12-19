function setup() {
  createCanvas(400, 400);
}
let a = 0

function draw() {
  background(241);

  strokeWeight(2);
  fill(255, 51, 51);
  ellipse(a, 30, 30, 30);

  fill(255, 51, 212);
  ellipse(a, 60, 60, 60);

  fill(184, 51, 255);
  strokeWeight(5);
  ellipse(a, 130, 90, 90);

  fill(51, 51, 255);
  ellipse(a, 180, 120, 120);

  fill(51, 202, 255)
  strokeWeight(10);
  ellipse(a, 310, 150, 150);

  if (a < 400) translate(a += 0.4, a += 3);
  else translate(a += 1, a -= 400);
}