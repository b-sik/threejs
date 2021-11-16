import { DirectionalLight, PointLight, SpotLight, RectAreaLight } from 'three';

function createLights(
  type = 'DirectionalLight',
  color = 'white',
  intensity = null,
  position = [10, 10, 10]
) {
  let light;

  switch (type) {
    case 'DirectionalLight':
      light = new DirectionalLight(color, intensity ? intensity : 8);
      break;
    case 'PointLight':
      light = new PointLight(color, intensity ? intensity : 80);
      break;
    case 'SpotLight':
      light = new SpotLight(color, intensity ? intensity : 80);
      break;
    case 'RectAreaLight':
      light = new RectAreaLight(color, intensity ? intensity : 80);
      break;
    default:
      break;
  }

  // move the light right, up, and towards us
  light.position.set(...position);

  return light;
}

export { createLights };
