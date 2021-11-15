import React, { useEffect, useRef } from 'react';
import { World } from './World/World';
import './App.css';

function App() {
  // Get a reference to the container element that will hold our scene
  const container = useRef(null);

  useEffect(() => {
    if (container.current) {
      const world = new World(container.current);
      world.render();
    }
  }, []);

  return <div id='scene-container' ref={container} />;
}

export default App;
