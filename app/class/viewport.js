class Viewport {
  constructor(
    container = document.body,
    width = 640,
    height = 480,
    options = {
      antialias: true
    }) {
    this.renderer = new THREE.WebGLRenderer(options);
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.container = container;
    this.container.appendChild(this.canvas);
  }
  get canvas() {
    return this.renderer.domElement;
  }
}

export default Viewport;
