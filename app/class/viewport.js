import THREE from 'three';

class Viewport {
  constructor(
    container = document.body,
    width = 800,
    height = 600,
    options = {
      resize: true,
      antialias: true,
      alpha: false
    }) {
    this.renderer = new THREE.WebGLRenderer(options);
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.width = width;
    this.height = height;
    this.renderer.setSize(this.width, this.height);
    this.renderer.setClearColor(0x202020, 1);
    this.container = container;
    this.container.appendChild(this.canvas);
    // this.canvas.style.cssText = 'width: 100%; height: 100%;';
  }
  get canvas() {
    return this.renderer.domElement;
  }

  resize(camera) {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    renderer.setPixelRatio(.5);
    this.renderer.setSize(this.width, this.height);
    camera.aspect = this.width / this.height;
    camera.updateProjectionMatrix();
  }
}

export default Viewport;
