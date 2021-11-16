import { createCamera } from './components/camera.js';
import { createCube } from './components/cube.js';
import { createLights } from './components/lights.js';
import { createScene } from './components/scene.js';

import { createRenderer } from './systems/renderer.js';
import { Resizer } from './systems/Resizer.js';

// These variables are module-scoped: we cannot access them
// from outside the module
let camera;
let renderer;
let scene;

let rotation;

class World {
  // 1. Create an instance of the World app
  constructor(container) {
    camera = createCamera();
    scene = createScene();
    renderer = createRenderer();
    container.append(renderer.domElement);

    rotation = [-0.5, -0.1, 0.8];

    scene.add(
      createCube(undefined, undefined, rotation, { color: 'indigo' }),
      createCube([1, 1, 1], [1.5, 1.5, 1.5], rotation, { color: 'gold' }),
      createLights('DirectionalLight', 'white', 10, [10, 10, 10])
    );

    // eslint-disable-next-line no-unused-vars
    const resizer = new Resizer(container, camera, renderer);
  }

  // 2. Render the scene
  render() {
    // draw a single frame
    renderer.render(scene, camera);
  }
}

export { World };
