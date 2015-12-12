import Viewport from 'class/viewport';
import Cameraman from 'class/cameraman';
import BaseObject from 'class/base-object';
import Ship from 'class/ship';

class Scene {
  constructor() {
    this.scene = new THREE.Scene();
    this.viewport = new Viewport(undefined, 800, 600);
    BaseObject.viewport = this.viewport;
    this.cameraman = new Cameraman();

    this.ship = new Ship();

    // to debug the scene is being rendered
    var geometry = new THREE.BoxGeometry(1, 1, 1);
    var material = new THREE.MeshBasicMaterial({
      color: 0x00ff00
    });

    this.cube = new THREE.Mesh(geometry, material);
    this.scene.add(this.cube);

    this.cameraman.camera.position.z = 5;
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
