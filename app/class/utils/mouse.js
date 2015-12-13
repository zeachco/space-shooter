// ox/y/z = old x/y/z
// vx/y/z = vector x/y/z
class Mouse {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.z = 0;
    this.autoreset = true;
    this._keys = {};
    window.addEventListener('mousemove', this._move.bind(this));
    window.addEventListener('mousewheel', this._scroll.bind(this));
    window.addEventListener('mouseup', this._up.bind(this));
    window.addEventListener('mousedown', this._down.bind(this));
    window.addEventListener('contextmenu', e => e.preventDefault());
  }

  _up(event) {
    this._keys[event.which] = false;
  }

  _down(event) {
    window.console.debug(event.which); // shows being pressed
    this._keys[event.which] = true;
  }

  alias(name, key) {
    this._alias[name] = key;
  }

  state(key) {
    return typeof key === 'number' ? this._keys[key] : this._keys[this._alias[key]];
  }

  down(key) {
    return this.state(key);
  }

  up(key) {
    return !this.state(key);
  }
  
  _scroll(event) {
    let oz = this.z;
    this.z += event.wheelDelta > 0 ? 1 : -1;
    this._vz = this.vz + this.z - oz;
  }

  _move(event) {
    let ox = this.x;
    let oy = this.y;
    this.x = event.x;
    this.y = event.y;
    this._vx = this.vx + this.x - ox;
    this._vy = this.vy + this.y - oy;
  }

  get vx() {
    let val = this._vx || 0;
    if (this.autoreset)
      this._vx = 0;
    return val;
  }

  get vy() {
    let val = this._vy || 0;
    if (this.autoreset)
      this._vy = 0;
    return val;
  }

  get vz() {
    let val = this._vz || 0;
    if (this.autoreset)
      this._vz = 0;
    return val;
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
