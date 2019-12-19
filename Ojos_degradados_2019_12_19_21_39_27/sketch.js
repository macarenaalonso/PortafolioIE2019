function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(0);
  for (a = 0; a < 12; a = a + 1) {
    for (b = 0; b < 12; b = b + 1) {
      if ((a + b) % 3 == 0) {
        fill(0);
        if ((a + b) % 3 == 1) {
          fill(220);

        } else {
          fill(255, 255 - a * 20, 255 - a * 12);
        }
        arc(b * 50, a * 50, 50, 50, 10 + a, 40 + a);
        fill(59, 181, 234);
        ellipse(b * 50, a * 50, 30, 30);
        fill(0)
        ellipse(b * 50, a * 50, 8 + a, 8 + a)
      }
    }
  }
}