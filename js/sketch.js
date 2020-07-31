let walls = [];
let ray;
let particle;

const sceneW = 400;
const sceneH = 400;
const fov = 60;
function setup() {
  createCanvas(sceneW * 2, sceneH);
  const numWalls = 5;
  for (let i = 0; i < numWalls; i++) {
    const x1 = random(sceneW);
    const y1 = random(sceneW);
    const x2 = random(sceneH);
    const y2 = random(sceneH);
    walls.push(new Boundary(x1, y1, x2, y2));
  }
  walls.push(new Boundary(0, 0, sceneW, 0));
  walls.push(new Boundary(sceneW, 0, sceneW, sceneH));
  walls.push(new Boundary(sceneW, sceneH, 0, sceneH));
  walls.push(new Boundary(0, sceneH, 0, 0));
  particle = new Particle();
}

function draw() {
  if (keyIsDown(RIGHT_ARROW)) {
    particle.rotate(0.03);
  } else if(keyIsDown(LEFT_ARROW)) {
    particle.rotate(-0.03);
  } 
  if(keyIsDown(UP_ARROW)) {
    particle.move(1);
  } else if(keyIsDown(DOWN_ARROW)) {
    particle.move(-1);
  }
  background(0);
  for (let wall of walls) {
    wall.show();
  }
  // particle.update(mouseX, mouseY);
  particle.show();
  const scene = particle.look(walls);
  const w = sceneW / scene.length;
  push();
  translate(sceneW, 0);
  for ( let i = 0; i < scene.length; i++) {
    noStroke();
    const sq = scene[i]*scene[i];
    const wSq = sceneW * sceneW;
    const b = map(scene[i], 0, wSq, 255, 0);
    const h = map(scene[i], 0, sceneW, sceneH, 0);
    fill(b);
    rectMode(CENTER);
    rect(i*w + w / 2,sceneH /2, w + 1, h);
  }
  pop();

  // ray.lookAt(mouseX, mouseY);

  // let pt = ray.cast(wall);

  // if (pt) {
  //   fill(255);
  //   ellipse(pt,x, pt.y, 8, 8);
  // }
}