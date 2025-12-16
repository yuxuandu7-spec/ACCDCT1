let angle = 0
let sizes = []
let colors = []

let numRings = 8
let baseRadius
let startTime

function setup() {
  createCanvas(1000, 800)
  colorMode(HSB, TWO_PI, 1, 1)
  rectMode(CENTER)

  sizes = [400, 320, 260, 200, 150]
  for (let i = 0; i < sizes.length; i++) {
    colors[i] = color(TWO_PI / sizes.length * i, 0.6, 0.9)
  }

  baseRadius = width * 0.15
  startTime = millis()
  strokeCap(SQUARE)
}

function draw() {
  background(0.2)
  translate(width / 2, height / 2)

  // ---------- Repeated motion: rotating squares ----------
  for (let i = 0; i < sizes.length; i++) {
    push()
    let n = noise(frameCount * 0.01 + i)
    rotate(sin(angle + i) * n)
    fill(colors[i])
    noStroke()
    rect(0, 0, sizes[i], sizes[i])
    pop()
  }

  angle += 0.01

  // ---------- Delayed motion: rotating rings ----------
  if (millis() - startTime > 3000) {
    noFill()
    strokeWeight(18)

    for (let i = 0; i < numRings; i++) {
      let ringAngle = sin(
        millis() * 0.001 * (i * 0.4 + 1)
      )
      stroke(color(TWO_PI / numRings * i, 0.8, 0.9))
      push()
      rotate(ringAngle)
      arc(
        0,
        0,
        baseRadius * 2 + i * 40,
        baseRadius * 2 + i * 40,
        HALF_PI,
        TWO_PI
      )
      pop()
    }
  }
}

