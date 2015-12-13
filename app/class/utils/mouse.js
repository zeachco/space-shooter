// ox/y/z = old x/y/z
// vx/y/z = vector x/y/z
class Mouse {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.z = 0;
    this.vx = 0;
    this.vy = 0;
    this.vz = 0;
    this.ox = 0;
    this.oy = 0;
    this.oz = 0;
    window.addEventListener('mousemove', this._move.bind(this));
    window.addEventListener('mousewheel', this._scroll.bind(this));
  }

  _scroll(event) {
    this.oz = this.z;
    this.z += event.wheelDelta > 0 ? 1 : -1;
    this.vz = this.z - this.oz;
  }

  _move(event) {
    this.ox = this.x;
    this.oy = this.y;
    this.x = event.x;
    this.y = event.y;
    this.vx = this.x - this.ox;
    this.vy = this.y - this.oy;
  }

  get ratio() {
    return {
      x: this.x / window.innerWidth,
      y: this.y / window.innerHeight
    }
  }

  get relative() {
    return {
      x: (this.x / window.innerWidth) - 0.5,
      y: (this.y / window.innerHeight) - 0.5
    }
  }
}

export default Mouse;
