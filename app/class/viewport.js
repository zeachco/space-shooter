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
    window.addEventListener('resize', this.resize.bind(this), false);
  }
  get canvas() {
    return this.renderer.domElement;
  }

  set camera(camera) {
    this._camera = camera;
    this.resize();
  }

  resize() {
    if (!this._camera)
      return;
    // this.width = window.innerWidth;
    // this.height = window.innerHeight;

    // dimensions
    // this.renderer.setSize(this.width / 2, this.height / 2);
    this.canvas.style.width = window.innerWidth + 'px';
    this.canvas.width = this.width;
    this.canvas.style.height = window.innerHeight + 'px';
    this.canvas.height = this.height;

    // projection
    // renderer.setPixelRatio(.5);
    this._camera.aspect = this.width / this.height;
    this._camera.updateProjectionMatrix();
  }
}

export default Viewport;
