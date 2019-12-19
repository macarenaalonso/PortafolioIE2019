// 10.000 líneas rectas de 20 pixeles puestas aleatoriamente. Ocupar: line(), random() y ciclo for. Quise que tanto la posición como el color de las líneas fueran random.


let i = 0;
let col = {
  r: 255,
  g: 0,
  b: 0
};


function setup() {
  createCanvas(900, 450);
  strokeWeight(2);
  noLoop(); // mantiene las líneas quietas
}


function draw() {
  background(255);

  for (let i = 0; i < 10000; i++) {

    push();

    let posX = random(20, width - 20);
    let posY = random(40, height - 40);

    translate(posX, posY);

    rotate(random(TWO_PI));
    col.r = 0;
    col.g = random(100, 255);
    col.b = random(100, 180);
    stroke(col.r, col.g, col.b, 50); // de poner fill() las líneas se veían negras
    line(-20, 0, 20, 0);

    pop();

  }
}