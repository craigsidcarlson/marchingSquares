let width;
let height;
let terrain;
let particle;
function setup() {
  width = 600;
  height = 400;
  const particle_fov = 90;
  const resolution = 10;
  // width = windowWidth;
  // height = windowHeight;
  createCanvas(width, height);
  terrain = new GenerateTerrain(resolution);
  particle = new Particle(particle_fov);
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
  for (let i = 0; i < terrain.walls.length; i++) {
    terrain.walls[i].show();
  }
  particle.show();
  const scene = particle.look(terrain.walls);
  const w = width / scene.length;
  push();
  translate(width, 0);
  for ( let i = 0; i < scene.length; i++) {
    noStroke();
    const sq = scene[i]*scene[i];
    const wSq = width * width;
    const b = map(scene[i], 0, wSq, 255, 0);
    const h = map(scene[i], 0, width, height, 0);
    fill(b);
    rectMode(CENTER);
    rect(i*w + w / 2, height /2, w + 1, h);
  }
  pop();
}