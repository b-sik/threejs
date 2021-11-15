import React, { useEffect, useRef } from 'react';
import {
  WebGLRenderer,
  Scene,
  PerspectiveCamera,
  BoxBufferGeometry,
  MeshBasicMaterial,
  Mesh,
  Color,
} from 'three';
import './App.css';

function App() {
  // Get a reference to the container element that will hold our scene
  const container = useRef(null);
  const renderer = new WebGLRenderer();

  const scene = new Scene();

  // Create a camera
  const fov = 35; // AKA Field of View
  const aspect = window.innerWidth / window.innerHeight;
  const near = 0.1; // the near clipping plane
  const far = 100; // the far clipping plane

  const camera = new PerspectiveCamera(fov, aspect, near, far);

  // create a geometry
  const geometry = new BoxBufferGeometry(2, 2, 2);

  // create a default (white) Basic material
  // NOTE: MeshBasicMaterial is the only material that doesn't require light
  const material = new MeshBasicMaterial();

  // create a Mesh containing the geometry and material
  const cube = new Mesh(geometry, material);

  useEffect(() => {
    // Set the background color
    scene.background = new Color('skyblue');

    // every object is initially created at ( 0, 0, 0 )
    // move the camera back so we can view the scene
    camera.position.set(0, 0, 10);

    // add the mesh to the scene
    scene.add(cube);

    // next, set the renderer to the same size as our container element
    renderer.setSize(window.innerWidth, window.innerHeight);

    // finally, set the pixel ratio so that our scene will look good on HiDPI displays
    renderer.setPixelRatio(window.devicePixelRatio);

    container.current.appendChild(renderer.domElement);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const animate = () => {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
  };

  animate();

  return <div ref={container} />;
}

export default App;
