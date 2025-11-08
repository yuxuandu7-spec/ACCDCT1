class Lotus {
  constructor(x, y, r) {
    this.pos = createVector(x, y)
    this.r = r
  }

  display() {
    fill(120, 0.5, 0.7)
    noStroke()
    circle(this.pos.x, this.pos.y, this.r * 2)
  }
}