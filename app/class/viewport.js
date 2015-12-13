class Viewport {
  constructor(
    container = document.body,
    width = 800,
    height = 600,
    options = {
      antialias: true
    }) {
    this.renderer = new THREE.WebGLRenderer(options);
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.width = width;
    this.height = height;
    this.renderer.setSize(this.width, this.height );
    this.container = container;
    this.container.appendChild(this.canvas);
    this.canvas.style.cssText = 'width: 100%; height: 100%;';
  }
  get canvas() {
    return this.renderer.domElement;
  }

  resize(camera) {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    this.renderer.setSize(this.width, this.height );
  }
}

export default Viewport;
