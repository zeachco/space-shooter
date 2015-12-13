import THREE from 'three';
import MeshObject from 'class/mesh-object';

var texloader = new THREE.TextureLoader();
var tex = texloader.load('/assets/laser.png');
var material = new THREE.MeshBasicMaterial({
  map: tex,
  transparent: true
});
var geometry = new THREE.BoxGeometry(.1, 0.5, .01);

class Projectile extends MeshObject {
  constructor() {
    super();
    this.mesh = new THREE.Mesh(geometry, material);
  }
  update() {
    this.mesh.position.y += .5;
    this.mesh.position.x += Math.random() * 0.1 - 0.05;
    if (this.mesh.position.y > 100) {
      this.remove();
    }
  }

}

export default Projectile;
