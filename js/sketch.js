let width;
let height;
let terrain;
let particle;
function setup() {
  width = windowWidth *0.95;
  height = windowHeight*0.95;
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  const cnv = createCanvas(width, height);
  cnv.position(x, y);
  const particle_fov = 90;
  const resolution = 8;
  // width = windowWidth;
  // height = windowHeight;
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
