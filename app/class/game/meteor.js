import MeshObject from 'class/mesh-object';

class Meteor extends MeshObject {
  constructor() {
    super();
    this.y = 100;
    this.x = Math.random() * 10 - 500;
  }
}

export default Meteor;
