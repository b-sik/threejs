import { TetrahedronBufferGeometry, Mesh, MeshStandardMaterial } from 'three';

function createTetrahedron() {
  // create a geometry
  const geometry = new TetrahedronBufferGeometry();

  // create a default (white) Basic material
  const material = new MeshStandardMaterial();

  // create a Mesh containing the geometry and material
  const tetrahedron = new Mesh(geometry, material);

  return tetrahedron;
}

export { createTetrahedron };
