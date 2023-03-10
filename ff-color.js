let colorInc = 0.5;  // Color change speed
let sat = 100; // saturation max 100
let brt = 100; // brightness max 100
let alph = 10; // alpha max 100
let numbPart = 300; // number of particles
let partStroke = 1; // line width
let angMult = 25; // 0.1 = straighter lines; 25+ = sharp curves
let angTurn = 1; // adjust angle for straight lines (after adjusting angMult)
let zOffInc = 0.0003; // speed of vector changes
let inc = 0.1;
let scl = 10;
let cols, rows;
let zoff = 0;
let fr;
let particles = [];
let flowfield;
let hu = 0;
let p = 1;

function setup() {
  createCanvas(500, 500);   //windowWidth-20, windowHeight-20);
  colorMode(HSB, 359, 100, 100, 100);

  cols = floor(width / scl);
  rows = floor(height / scl);
  fr = createP('');

  flowfield = new Array(cols * rows);

  for (let i = 0; i < numbPart; i++) {
    particles[i] = new Particle();
  }
  background(90);
}

function draw() {
  if (p > 0) {
    let yoff = 0;
    for (let y = 0; y < rows; y++) {
      let xoff = 0;
      for (let x = 0; x < cols; x++) {
        let index = x + y * cols;
        let angle = noise(xoff, yoff, zoff) * angMult + angTurn;
        let v = p5.Vector.fromAngle(angle);
        v.setMag(1);
        flowfield[index] = v;
        xoff += inc;
      }
      yoff += inc;
      zoff += zOffInc;
    }

    for (let i = 0; i < particles.length; i++) {
      particles[i].follow(flowfield);
      particles[i].update();
      particles[i].edges();
      particles[i].show(color(hu, sat, brt, alph));
    }

    hu += colorInc;
    if (hu > 359) {
      hu = 0;
    }
  }
}

function mousePressed() {
  p = p * -1;
}

function keyTyped() {
  if (key === "s") {
    save("myCanvas.jpg");
  }
}
