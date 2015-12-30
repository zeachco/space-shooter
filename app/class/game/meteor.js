import THREE from 'three';
import MeshObject from 'class/mesh-object';

var texloader = new THREE.TextureLoader();
var tex = texloader.load('/assets/ground.png');
var material = new THREE.MeshBasicMaterial({
  map: tex,
  // color: 0xaa4400,
  transparent: false
});
var geometry = new THREE.SphereGeometry(1, 6);

class Projectile extends MeshObject {
  constructor() {
    super();
    this.mesh = new THREE.Mesh(geometry, material);
    this.mesh.position.y = 300 + Math.random() * 500;
    this.mesh.position.x = 2 - Math.random();
    var r = 0.2 + Math.random() * 3;
    this.mesh.scale.set(r, r, r);
  }
  update() {
    this.mesh.position.y -= .5;
    this.mesh.rotation.x += .005;
    this.mesh.rotation.y += .05;
    if (this.mesh.position.y < -10) {
      this.remove();
    }
  }

}

export default Projectile;
