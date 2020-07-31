let width;
let height;
let terrain;
let particle;
function setup() {
  width = 600;
  height = 400;
  const particle_fov = 90;
  const resolution = 5;
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
  const seen_wall_indexes = particle.look(terrain.walls);
  for (let i = 0; seen_wall_indexes.length && i < seen_wall_indexes.length; i++) {
    terrain.walls[seen_wall_indexes[i]].show();
  }
}