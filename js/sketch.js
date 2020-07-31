let width;
let height;
let terrain;
let particle;
function setup() {
  width = windowWidth * 0.9 ;
  height = windowHeight * 0.9;
  const particle_fov = 90;
  const resolution = 8;
  // width = windowWidth;
  // height = windowHeight;
  createCanvas(width, height);
  terrain = new GenerateTerrain(resolution);
  particle = new Particle(particle_fov);
}
 
function draw() {
  if (!terrain || !terrain.walls) return;
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

  particle.show();
  particle.look();
  for (let i = 0; i < terrain.walls.length; i++) {
    terrain.walls[i].show();
  }
}
