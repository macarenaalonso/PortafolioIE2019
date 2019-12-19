//let img;
let fondo;
let fish1;
let fish2;
let fish3;
let crab;
let starfish;


function preload() {
  //cargar fondo y estampas
  //img = loadImage('archivo subido');
  fondo = loadImage('fondomarino.jpg');
  fish1 = loadImage('fish-11.png');
  fish2 = loadImage('fish-10.png');
  fish3 = loadImage('angelfish.png');
  crab = loadImage('crab-2.png');
  starfish = loadImage('starfish-dried.png');
}

function setup() {
  createCanvas(800, 600) //tamaño igual que el fondo
  background(fondo);
}

function draw() {}


function mousePressed() {

  creatures = [fish1, fish2, fish3, crab, starfish];
  creature = random(creatures);
  stamp(mouseX, mouseY);
}


function stamp(x, y) {
  o = random(60, 20) //aumento random de tamaño

  push();

  imageMode(CENTER);
  image(creature, x, y, 90 + o, 60 + o);

  pop();

}