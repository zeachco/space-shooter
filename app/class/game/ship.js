import THREE from 'three';
import MeshObject from 'class/mesh-object';
import Projectile from 'class/game/projectile';
import gamepad from 'core/gamepad';

class Ship extends MeshObject {
  constructor() {
    super();
    this.reloadBase = 5;
    this.reload = 0;

    var geometry = new THREE.BoxGeometry(.2, 1, .1);
    var material = new THREE.MeshBasicMaterial({
      color: 0x00ff00
    });

    this.mesh = new THREE.Mesh(geometry, material);

  }
  update() {
    if (this.reload >= 0) {
      this.reload -= 1;
    }
    this.mesh.position.set(gamepad.mouse.relative.x * 6, gamepad.mouse.relative.y * -10 + 2, 0);
    if (this.reload < 0 && (gamepad.state('shoot') || gamepad.mouse.state(1))) {
      this.reload = this.reloadBase;
      var projectile = new Projectile();
      projectile.mesh.position.x = this.mesh.position.x + .1;
      projectile.mesh.position.y = this.mesh.position.y + 0.25;
      projectile.mesh.position.z = this.mesh.position.z;

      var projectile2 = new Projectile();
      projectile2.mesh.position.x = this.mesh.position.x - .1;
      projectile2.mesh.position.y = this.mesh.position.y + 0.25;
      projectile2.mesh.position.z = this.mesh.position.z;
    }
  }
}

export default Ship;
