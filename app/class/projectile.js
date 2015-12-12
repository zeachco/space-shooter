var THREE = require('three');

import BaseObject from 'class/base-object';

var geometry = new THREE.BoxGeometry(.1, 0.5, .01);
var material = new THREE.MeshBasicMaterial({
  map: THREE.ImageUtils.loadTexture('/assets/laser.png'),
  transparent: true,
  color: 0xffffff
});

class Projectile extends BaseObject {
  constructor() {
    super();
    this.mesh = new THREE.Mesh(geometry, material);
    this.addToScene();
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
