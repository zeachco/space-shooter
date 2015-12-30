import THREE from 'three';
import Viewport from 'class/viewport';
import Cameraman from 'class/cameraman';
import BaseObject from 'class/base-object';
import Ship from 'class/game/ship';
import gamepad from 'core/gamepad';
import Meteore from 'class/game/meteor';

class Scene {
  constructor() {
    this.scene = new THREE.Scene();
    this.meteore = new Meteore();
    this.cameraman = new Cameraman();
    this.viewport = new Viewport(undefined, 800, 600);
    this.viewport.camera = this.cameraman.camera;
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
