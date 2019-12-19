// Inspirado en filtro ¨Neo¨ de la aplicación DuoTone, pero en negativo. Referencia: https://i.imgur.com/03h5xnA.jpg

let selfie;
let spacer = 3; // espacio entre elipses

function preload() {
  selfie = loadImage("IMG_20190718_170830_228.jpg");
}

function setup() {
  createCanvas(selfie.width, selfie.height); //canvas = tamaño que la foto
}

function draw() {
  noStroke();
  for (let y = 0; y < height; y += spacer) {
    for (let x = 0; x < width; x += spacer) {
      let col = selfie.get(x, y);
      FiltroDuo(x, y, col); //definir variables del filtro
    }
  }
}

function FiltroDuo(x, y, col) {
  let b = brightness(col);
  let r = red(col);
  let g = green(col);
  let bl = blue(col);

  let n = round(map(b, 0, 255, 40, 0));
  for (let i = 0; i < n; i++) {
    let nx = random(spacer, spacer);
    let ny = random(spacer, spacer);

    let c = color(r, 255 - g, 255 - bl); //al restarse de los 255 se forma un color en negativo
    fill(c);
    ellipse(x + nx, y + ny, 10, 10);
  }
}