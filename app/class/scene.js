import Viewport from 'class/viewport';
import Cameraman from 'class/cameraman';
import BaseObject from 'class/base-object';
import Ship from 'class/ship';
import gamepad from 'core/gamepad';

class Scene {
  constructor() {
    this.scene = new THREE.Scene();
    this.cameraman = new Cameraman();
    this.viewport = new Viewport(undefined, 800, 600);
    window.addEventListener('resize', function() {
      this.viewport.resize.bind(this.cameraman.camera);
    }.bind(this), false);
    BaseObject.viewport = this.viewport;
    BaseObject.scene = this.scene;
    this.ship = new Ship();
  }

  loop() {
    requestAnimationFrame(this.loop.bind(this));
    this.render();
  }

  render() {
    BaseObject.updateAll();
    this.viewport.renderer.render(this.scene, this.cameraman.camera);
  }
}

export default Scene;
