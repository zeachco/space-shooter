class Viewport {
  constructor() {
    this.renderer = new THREE.WebGLRenderer({
      antialias: true
    });
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }
  get canvas() {
    return this.renderer.domElement;
  }
}

export default Viewport;
