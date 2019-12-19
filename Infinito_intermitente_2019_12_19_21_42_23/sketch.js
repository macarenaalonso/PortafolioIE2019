let angle = 0;

function setup() {
  createCanvas(800, 600, WEBGL);
}

function draw() {
  background(0);

  let locX = mouseX - height / 2; //cambio de luz al pasar el cursor por encima
  let locY = mouseY - width / 2;

  ambientLight(50); // luz base
  directionalLight(255, 0, 0, 0.25, 0.25, 0); //determinar colores efecto tornasol
  pointLight(0, 0, 255, locX, locY, 250);

  rotateY(angle * 10);

  for (let j = 0; j < 5; j++) {
    push();
    for (let i = 0; i < 20; i++) {
      translate(
        sin(frameCount + j) * 100, //frameCount provoca intermitencia
        sin(frameCount + j) * 100,
        i * 0.01
      );
      rotateZ(angle) //da la forma al infinito
      push();
      noStroke();
      sphere(10, 10, 10);
      pop();
    }
    pop();

    angle += 0.001;
  }
}