import Viewport from 'class/viewport';
import Cameraman from 'class/cameraman';
import BaseObject from 'class/base-object';
import Ship from 'class/ship';
import Gamepad from 'class/gamepad';

class Scene {
  constructor() {
    this.scene = new THREE.Scene();
    this.viewport = new Viewport(undefined, 800, 600);
    BaseObject.viewport = this.viewport;
    BaseObject.scene = this.scene;
    this.cameraman = new Cameraman();
    this.ship = new Ship();
    this.gamepad = new Gamepad();

    // presets
    this.gamepad.alias('up', 38);
    this.gamepad.alias('down', 40);
    this.gamepad.alias('right', 39);
    this.gamepad.alias('left', 37);
    this.gamepad.alias('shoot', 32);

    this.cameraman.camera.position.z = 5;
  }

  loop() {
    requestAnimationFrame(this.loop.bind(this));
    this.render();
  }

  render() {
    BaseObject.updateAll();
    if (this.gamepad.state('up')) {
      this.ship.mesh.position.y += 0.1;
    }
    if (this.gamepad.state('down')) {
      this.ship.mesh.position.y -= 0.1;
    }
    if (this.gamepad.state('left')) {
      this.ship.mesh.position.x -= 0.1;
    }
    if (this.gamepad.state('right')) {
      this.ship.mesh.position.x += 0.1;
    }
    this.viewport.renderer.render(this.scene, this.cameraman.camera);
  }
}

export default Scene;
