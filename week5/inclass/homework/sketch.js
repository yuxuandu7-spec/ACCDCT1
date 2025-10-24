let angle = 0.0
let sizes = []
let colors = []


function setup() {
  createCanvas(1000, 800);
  colorMode(HSB, TWO_PI, 1, 1);
  sizes[0] = 400
  sizes[1] = 360
  sizes[2] = 300
  sizes[3] = 200
  sizes[4] = 150
  sizes[5] = 100
 

  for (let i = 5; i >= 0; i--) {
    colors[i] = color(TWO_PI / 6*i, 0.5, 0.8)

}



rectMode(CENTER)
}

function draw() {
  background(0.2);
  
  push()
  translate(width / 2, height / 2)
  for (let i = 0; i < sizes.length; i++) {
    fill(colors[i])
    rotate(angle)
    rect(0, 0, sizes[i], sizes[i])
    angle = angle + 0.001
  }
    pop()
}

