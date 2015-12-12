import Viewport from 'class/viewport';
import Cameraman from 'class/cameraman';
import BaseObject from 'class/base-object';
import Ship from 'class/ship';
import gamepad from 'core/gamepad';

class Scene {
  constructor() {
    this.scene = new THREE.Scene();
    this.viewport = new Viewport(undefined, 800, 600);
    BaseObject.viewport = this.viewport;
    BaseObject.scene = this.scene;
    this.cameraman = new Cameraman();
    this.ship = new Ship();
  }

  loop() {
    requestAnimationFrame(this.loop.bind(this));
    this.render();
  }

  render() {
    BaseObject.updateAll();
    if (gamepad.state('up')) {
      this.ship.mesh.position.y += 0.1;
    }
    if (gamepad.state('down')) {
      this.ship.mesh.position.y -= 0.1;
    }
    if (gamepad.state('left')) {
      this.ship.mesh.position.x -= 0.1;
    }
    if (gamepad.state('right')) {
      this.ship.mesh.position.x += 0.1;
    }
    this.viewport.renderer.render(this.scene, this.cameraman.camera);
  }
}

export default Scene;
