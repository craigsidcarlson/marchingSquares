class Particle {
  constructor(fov) {
    this.fov = fov;
    this.pos = createVector(width / 2, height / 2);
    this.rays = [];
    this.heading = 0;
    for (let a = -(this.fov/2); a < (this.fov/2); a += 1) {
      this.rays.push(new Ray(this.pos, radians(a)));
    }
  }

  rotate(angle) {
    this.heading += angle;
    let index = 0;
    for (let a = -(this.fov/2); a < (this.fov/2); a += 1) {
      this.rays[index].setAngle(radians(a) + this.heading);
      index++;
    }
  }

  move(v) {
    const velocity = p5.Vector.fromAngle(this.heading);
    velocity.setMag(v);
    this.pos.add(velocity);
  }

  update(x, y) {
    this.pos.set(x, y);
  }

  show() {
    fill(255);

    ellipse(this.pos.x, this.pos.y, 4);
    // for (let ray of this.rays) {
    //   ray.show();
    // }
  }

  look(walls) {
    const scene = [];
    for (let i = 0; i < this.rays.length; i++) {
      let closest = null;
      let record = Infinity;
      for (let j = 0; j < walls.length; j++) {
        const pt = this.rays[i].cast(walls[j]);
        if (pt) {
          let d = p5.Vector.dist(this.pos, pt);
          const a = this.rays[i].dir.heading() - this.heading;
          d*= cos(a);
          if (d < record) {
            record = d;
            closest = pt;
          }
        }
      }
      if (closest) {
        stroke(255, 100);
        line(this.pos.x, this.pos.y, closest.x, closest.y);
      }
      scene[i] = record;
    }
    return scene;
  }
}