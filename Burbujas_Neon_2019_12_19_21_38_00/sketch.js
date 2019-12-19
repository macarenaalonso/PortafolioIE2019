let slider;
let slider2;
let slider3;

function setup() {
  createCanvas(800, 500);

  slider = createSlider(0, 255, 0);
  slider2 = createSlider(0, 255, 193);
  slider3 = createSlider(0, 255, 255)

}

function draw() {
  background(0);
  let levels = round(map(mouseX, 0, width, 0, 8));
  recursiveCircle(width / 2, height / 2, 300, levels)

}

function recursiveCircle(x, y, diam, levels) {
  circle(x, y, diam);
  if (levels > -6) {
    recursiveCircle(x - diam / 1.5, y / 2, diam / 1.5, levels - 3);
    recursiveCircle(x + diam / 1.5, y * 2, diam / 1.5, levels - 3);
    stroke(slider.value(), slider2.value(), slider3.value());
    fill(slider.value(), slider2.value(), slider3.value(), 50)

  }
}