class Cameraman {
  constructor() {
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.camera.position.y = -2;
    this.camera.position.z = 5;
    this.camera.rotation.x = 0.9;
  }
}

export default Cameraman;
