let circleList = [];

function setup() {
  const canvasContainer = document.getElementById('canvas-container');
  const canvas = createCanvas(canvasContainer.offsetWidth, canvasContainer.offsetHeight);
  canvas.parent('canvas-container');
  noStroke();
}

function windowResized() {
  const canvasContainer = document.getElementById('canvas-container');
  resizeCanvas(canvasContainer.offsetWidth, canvasContainer.offsetHeight);
}

function draw() {
  background(0);

  // Add a new circle to the circleList every 10 frames
  if (frameCount % 10 == 0) {
    let newCircle = {
      x: mouseX,
      y: mouseY,
      size: random(10, 50),
      r: random(0, 255),
      g: random(0, 255),
      b: random(0, 255),
      alpha: random(50, 200)
    };
    circleList.push(newCircle);
  }

  // Move each circle in the circleList towards the cursor
  for (let i = 0; i < circleList.length; i++) {
    let circle = circleList[i];
    let angle = atan2(mouseY - circle.y, mouseX - circle.x);
    let distance = dist(mouseX, mouseY, circle.x, circle.y);
    let speed = map(distance, 0, width, 0, 10);
    circle.x += cos(angle) * speed;
    circle.y += sin(angle) * speed;

    // Draw the circle
    fill(circle.r, circle.g, circle.b, circle.alpha);
    ellipse(circle.x, circle.y, circle.size, circle.size);

    // If the circle goes off the canvas, remove it from the circleList
    if (circle.x < -50 || circle.x > width + 50 || circle.y < -50 || circle.y > height + 50) {
      circleList.splice(i, 1);
    }
  }
}
