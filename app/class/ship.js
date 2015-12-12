import BaseObject from 'class/base-object';
import Projectile from 'class/projectile';
var gamepad = require('core/gamepad');

class Ship extends BaseObject {
  constructor() {
    super();
    this.reloadBase = 10;
    this.reload = 0;

    var geometry = new THREE.BoxGeometry(.2, 1, .1);
    var material = new THREE.MeshBasicMaterial({
      color: 0x00ff00
    });

    this.mesh = new THREE.Mesh(geometry, material);
    this.addToScene();

  }
  update() {
    if (this.reload >= 0) {
      this.reload -= 1;
    }
    if (this.reload < 0 && gamepad.state('shoot')) {
      this.reload = this.reloadBase;
      var projectile = new Projectile();
      projectile.mesh.position.x = this.mesh.position.x;
      projectile.mesh.position.y = this.mesh.position.y;
      projectile.mesh.position.z = this.mesh.position.z;
    }
  }
}

export default Ship;
