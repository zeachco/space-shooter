import BaseObject from 'class/base-object';

class MeshObject extends BaseObject {
  constructor() {
    super();
    setTimeout(() => {
      if (this.mesh)
        this.addToScene();
    }, 0);
  }

  addToScene() {
    if (this.mesh)
      BaseObject.scene.add(this.mesh);
  }

  remove() {
    this.remove.super();
    if (this.mesh)
      BaseObject.scene.remove(this.mesh);
  }

}

export default MeshObject;
