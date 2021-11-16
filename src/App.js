import React, { useEffect, useRef, useState } from 'react';
import { World } from './World/World';
import './App.css';

function App() {
  // render button
  const [render, setRender] = useState(true);

  // Get a reference to the container element that will hold our scene
  const container = useRef(null);

  useEffect(() => {
    if (container.current && true === render) {
      const world = new World(container.current);
      world.render();
    }
  }, [render]);

  return (
    <>
      {render ? (
        <div id='scene-container' ref={container} />
      ) : (
        <button
          id='render-btn'
          onClick={() => setRender(!render)}
        >
          Render Scene
        </button>
      )}
    </>
  );
}

export default App;
