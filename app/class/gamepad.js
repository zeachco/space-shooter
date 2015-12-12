class Gamepad {
  constructor() {
    this._keys = {};
    this._alias = {};
    window.addEventListener('keyup', this._up.bind(this));
    window.addEventListener('keydown', this._down.bind(this));
  }

  _up(event) {
    this._keys[event.which] = false;
  }

  _down(event) {
    window.console.debug(event.which, true);
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
}

export default Gamepad;
