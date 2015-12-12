import BaseObject from 'class/base-object';
class Ship extends BaseObject {
  constructor() {
    super();

    // to debug the scene is being rendered
    var geometry = new THREE.BoxGeometry(.2, 1, 1);
    var material = new THREE.MeshBasicMaterial({
      color: 0x00ff00
    });

    this.mesh = new THREE.Mesh(geometry, material);
    this.addToScene();

  }
  update() {
    
  }
}

export default Ship;
