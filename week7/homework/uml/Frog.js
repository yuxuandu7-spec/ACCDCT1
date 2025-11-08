class Frog {
  constructor(x, y) {
    this.pos = createVector(x, y)
    this.vel = createVector(0, 0)
    this.hunger = 1 // 1 = hungry, 0 = full
  }

  move(lotuses, flies) {
    // if hungry, chase nearest fly
    if (this.hunger > 0.3 && flies.length > 0) {
      let nearest = flies[0]
      let minD = this.pos.dist(nearest.pos)

      flies.forEach(f => {
        let d = this.pos.dist(f.pos)
        if (d < minD) {
          minD = d
          nearest = f
        }
      })

      let dir = p5.Vector.sub(nearest.pos, this.pos).setMag(1.5)
      this.pos.add(dir)

      // eat fly
      if (minD < 12) {
        flies.splice(flies.indexOf(nearest), 1)
        this.hunger -= 0.4
      }
    } else {
      // go sit on closest lotus
      let closest = lotuses[0]
      let minD = this.pos.dist(closest.pos)
      lotuses.forEach(l => {
        let d = this.pos.dist(l.pos)
        if (d < minD) {
          minD = d
          closest = l
        }
      })

      let dir = p5.Vector.sub(closest.pos, this.pos).setMag(1)
      this.pos.add(dir)
      this.hunger += 0.002 // resting restores hunger
    }

    this.hunger = constrain(this.hunger, 0, 1)
  }

  display() {
    fill(100, 1, 1)
    circle(this.pos.x, this.pos.y, 20)
  }
}