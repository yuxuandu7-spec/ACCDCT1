let lotuses = []
let frogs = []
let flies = []

function setup() {
  createCanvas(800, 600)
  colorMode(HSB, 360, 1, 1)

  // create lotus pads
  lotuses.push(new Lotus(width * 0.3, height * 0.6, 60))
  lotuses.push(new Lotus(width * 0.7, height * 0.4, 80))

  // create frogs
  frogs.push(new Frog(width * 0.35, height * 0.55))
  frogs.push(new Frog(width * 0.75, height * 0.45))

  // create initial flies
  for (let i = 0; i < 8; i++) {
    flies.push(new Fly(random(width), random(height)))
  }
}

function draw() {
  background(200, 0.1, 1)

  lotuses.forEach(l => l.display())

  flies.forEach(f => {
    f.move()
    f.display()
  })

  frogs.forEach(fr => {
    fr.move(lotuses, flies)
    fr.display()
  })
}

function mouseReleased() {
  flies.push(new Fly(mouseX, mouseY))
}