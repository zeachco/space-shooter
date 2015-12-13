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
    window.addEventListener('movemove', this._move.bind(this));
    window.addEventListener('mousescroll', this._scroll.bind(this));
  }

  _move(event) {
    this.ox = this.x;
    this.oy = this.y;
    this.x = event.x;
    this.y = event.y;
    this.vx = this.x - this.ox;
    this.vy = this.y - this.oy;
  }

  _scroll(event) {
    this.oz = this.z;
    this.z = event.z;
    this.vz = this.z - this.oz;
  }
}

export default Mouse;
