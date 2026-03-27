function setup() {

  createCanvas(400, 400);
}

function draw() {
  stroke(178,255,255) // cambia el color del trazo
  strokeWeight(5)
  background(0, 200, 188);
  fill(0,0,255)
text('hola mundo', 50, 50);

  ellipse(100, 100, 200, 200);
  line(10, 10, 40, 40)
  quad(20, 20, 80, 20, 80, 80, 20, 80)
  triangle(330, 300, 200, 40, 50, 400);
}