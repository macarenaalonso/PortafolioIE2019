var a = 0;
var r = 10;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  frameRate(30);
}

function draw() {
  noFill();

  var x = r * cos(a);
  var y = r * sin(a);

  a += 0.1;
  r += 1;

  push();
  translate(width / 2, height / 2);
  strokeWeight(y);
  stroke(40, 20);
  fill(100, 10, 230, 50)
  ellipse(x, y, 40, 40);
  pop();

}