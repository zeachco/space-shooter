global.THREE = require('three');

import Viewport from 'class/viewport';
var viewport = new Viewport(800, 600);
document.body.appendChild(viewport.canvas);
