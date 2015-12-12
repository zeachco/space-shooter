import BaseObject from 'class/base-object';

class Projectile extends BaseObject {
  constructor() {
    super();
    // to debug the scene is being rendered
    var geometry = new THREE.BoxGeometry(.1, 0.5, .01);
    var material = new THREE.MeshBasicMaterial({
      color: 0xff0000
    });

    this.mesh = new THREE.Mesh(geometry, material);
    this.addToScene();
  }
  update() {
    this.mesh.position.y += .5;
    if (this.mesh.position.y > 100) {
      this.remove();
    }
  }

}

export default Projectile;
