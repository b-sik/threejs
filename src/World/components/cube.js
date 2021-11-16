import { BoxBufferGeometry, Mesh, MeshStandardMaterial } from 'three';

function createCube(
  size = [2, 2, 2],
  position = null,
  rotation = null,
  materialSpec = {
    color: 'white',
  }
) {
  // create a geometry
  const geometry = new BoxBufferGeometry(...size);

  // create a default (white) Basic material
  const material = new MeshStandardMaterial(materialSpec);

  // create a Mesh containing the geometry and material
  const cube = new Mesh(geometry, material);

  if (position) {
    cube.position.set(...position);
  }
  if (rotation) {
    cube.rotation.set(...rotation);
  }

  return cube;
}

export { createCube };
