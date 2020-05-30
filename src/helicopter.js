class Helicopter {
  constructor(ctx) {
    this.ctx = ctx
    this.tick = 0

    this.x = 100
    this.y = 0

    this.w = 100
    this.h = 40

    this.vx = 0
    this.vy = 0
    this.ay = 0
    this.ax = 0
    this.g = 0.1

    this.img = new Image()
    this.img.src =
      "https://2.bp.blogspot.com/-P6ZbLE-rnFM/WPTQh65UtMI/AAAAAAAABF8/9iYl-cIUEtIhj2JDTixyqZNeBn183AdmQCLcB/s1600/helicopter-spritesheet.png"
    this.img.frames = 4
    this.img.frameIndex = 0

    this.weapon = new Weapon(this)

    this._setListeners()
  }

  draw() {
    // TODO: draw helicopter image
    this.ctx.drawImage(
      this.img,
      0,
      (this.img.frameIndex * this.img.height) / this.img.frames,
      this.img.width,
      this.img.height / this.img.frames,
      this.x,
      this.y,
      this.w,
      this.h
    )

    if (this.ay) {
      this.animate()
    }

    this.weapon.draw()
  }

  isFloor() {
    // TODO: check if floor
  }

  move() {
    // TODO: move
    this.vx += this.ax
    this.vy += this.ay
    // this.vy += this.g

    this.x += this.vx
    this.y += this.vy

    // if (this.x + this.w > this.ctx.canvas.width) {
    //   this.x = this.ctx.canvas.width - this.w
    //   this.ax = 0
    // }

    // if (this.y > this.ctx.canvas.height) {
    //   this.y = this.ctx.canvas.height - this.h
    // }

    // if (this.y + this.h < 0) {
    //   this.y = this.h

    // }
    this.weapon.move()
  }

  animate() {
    this.tick++
    if (this.tick > 3) {
      this.img.frameIndex++
      this.tick = 0
    }

    if (this.img.frameIndex >= this.img.frames) {
      this.img.frameIndex = 0
    }
  }

  _setListeners() {
    document.addEventListener("keydown", (e) => {
      // TODO
      switch (e.keyCode) {
        case UP:
          this.ay = -0.5
          break
        case RIGHT:
          this.vx = .8
          break
        case SPACE:
          this.weapon.shoot()
          break
      }
    })

    document.addEventListener("keyup", (e) => {
      // TODO
      switch (e.keyCode) {
        case UP:
          this.ay = 0
          break
        case RIGHT:
          this.vx = 0
          break
      }
    })

  }
}