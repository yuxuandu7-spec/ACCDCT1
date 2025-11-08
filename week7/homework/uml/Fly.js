class Fly {
  constructor(x, y) {
    this.pos = createVector(x, y)
    this.vel = p5.Vector.random2D().mult(2)
  }

  move() {
    this.pos.add(this.vel)

    if (this.pos.x < 0 || this.pos.x > width) this.vel.x *= -1
    if (this.pos.y < 0 || this.pos.y > height) this.vel.y *= -1
  }

  display() {
    fill(240, 1, 0.6)
    circle(this.pos.x, this.pos.y, 6)
  }
}