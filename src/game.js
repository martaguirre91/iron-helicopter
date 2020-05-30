class Game {
  constructor(ctx) {
    this.ctx = ctx
    this.intervalId = null
    this.tick = 0

    this.bg = new Background(ctx)
    this.helicopter = new Helicopter(ctx)
    this.obstacles = []
  }

  start() {
    this.intervalId = setInterval(() => {
      this._clear()
      this._draw()
      this._move()
      this._addObstacle()
      this._clearObstacles()
    }, 1000 / 60)

    //

    // TODO: loop. clear, draw, move, addObstacle, checkCollisions, clearObstacles
  }

  _clearObstacles() {
    // TODO: filter only visible obstacles (call o.isVisible())
    console.log(this.obstacles)
    this.obstacles = this.obstacles.filter( el => el.isVisible() )
  }

  _addObstacle() {
    // TODO: add new Obstacle every 100 ticks

    this.tick++
    if (this.tick > 100) {
      const newObstacle = new Obstacle(ctx)
      this.obstacles.push(newObstacle)
      this.tick = 0
    }
  }

  _clear() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)
  }

  _draw() {
    // TODO: draw everything
    this.bg.draw()
    this.helicopter.draw()
    this.obstacles.forEach((el) => el.draw())
  }

  _move() {
    // TODO: move everything
    this.bg.move()
    this.helicopter.move()
    this.obstacles.forEach((el) => el.move())
  }

  _checkCollisions() {
    // TODO: check helicopter on floor?
    // TODO: iterate obstacles. check colX and colY
  }

  _gameOver() {
    clearInterval(this.intervalId)

    this.ctx.font = "40px Comic Sans MS"
    this.ctx.textAlign = "center"
    this.ctx.fillText(
      "GAME OVER",
      this.ctx.canvas.width / 2,
      this.ctx.canvas.height / 2
    )
  }
}
