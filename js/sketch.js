let width;
let height;
let cols, rows;
const rez = 10;
const increment = 0.1;
let field = [];
let zoff = 0;
let noise;
function setup() {
  // width = 600;
  // height = 400;
  width = windowWidth;
  height = windowHeight;
  noise = new OpenSimplexNoise(Date.now());
  createCanvas(width, height);
  cols = width / rez + 1;
  rows = height / rez + 1;
  for(let i = 0; i < cols; i++) {
    const k  = [];
    for (let j = 0; j < rows; j++) {
      k.push(0);
    }
    field.push(k);
  }
}
 
function draw() {
  background(0);
  let xoff = 0;
  for(let i = 0; i < cols; i++) {
    xoff += increment;
    let yoff = 0;
    for (let j = 0; j < rows; j++) {
      field[i][j] = float(noise.noise3D(xoff, yoff, zoff));
      yoff += increment;
    }
  }
  zoff += 0.01;

  // for(let i = 0; i < cols; i++) {
  //   for (let j = 0; j < rows; j++) {
  //     stroke(field[i][j]*255);
  //     strokeWeight(rez*0.4);
  //     point(i*rez, j*rez);
  //   }
  // }

  for(let i = 0; i < cols - 1; i++) {
    for (let j = 0; j < rows - 1; j++) {
      const x = i * rez;
      const y  = j * rez;
      const a = createVector(x + rez * 0.5, y);
      const b = createVector(x + rez, y + rez * 0.5);
      const c = createVector(x + rez * 0.5, y + rez);
      const d = createVector(x , y + rez * 0.5);
      strokeWeight(1);
      const state = getState(ceil(field[i][j]), ceil(field[i+1][j]), ceil(field[i+1][j+1]), ceil(field[i][j+1]));
      stroke(255);
      switch(state) {
        case 1:
          drawLine(c,d);
          break;
        case 2:
          drawLine(b,c);
          break;
        case 3:
          drawLine(b,d);
          break;
        case 4:
          drawLine(a,b);
          break;
        case 5:
          drawLine(a,d);
          drawLine(b,c);
          break;
        case 6:
          drawLine(a,c);
          break;
        case 7:
          drawLine(a,d);
          break;
        case 8:
          drawLine(a,d);
          break;
        case 9:
          drawLine(a,c);
          break;
        case 10:
          drawLine(a,b);
          drawLine(c,d);
          break;
        case 11:
          drawLine(a,b);
          break;
        case 12:
          drawLine(b,d);
          break;
        case 13:
          drawLine(b,c);
          break;
        case 14:
          drawLine(c,d);
          break;
      }
    }
  }
  noLoop();
}

function getState(a,b,c,d) {
  return a * 8 + b * 4 + c * 2 + d;
}

function drawLine(v1, v2) {
  line(v1.x, v1.y, v2.x, v2.y);
}