export const cylinderVertex = /* glsl */ `
  attribute vec2 uv;
  attribute vec3 position;
  attribute vec3 normal;

  uniform mat4 modelViewMatrix;
  uniform mat4 projectionMatrix;

  varying vec2 vUv;
  varying vec3 vNormal;

  void main() {
    vUv = uv;
    // Transform the normal into view space so the fragment shader can tell
    // whether a surface faces the camera (front) or away (back/inner).
    vNormal = normalize(mat3(modelViewMatrix) * normal);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

export const cylinderFragment = /* glsl */ `
  precision highp float;

  uniform sampler2D tMap;
  uniform float uDarkness; // 0.0 = normal, 1.0 = fully black

  varying vec2 vUv;
  varying vec3 vNormal;

  void main() {
    // In view space the camera looks down -Z. A fragment whose normal points
    // toward +Z is the far/inner surface of the cylinder  —  its texture must be
    // mirrored back so labels read correctly instead of appearing reversed.
    vec2 uv = vUv;
    if (vNormal.z > 0.0) {
      uv.x = 1.0 - uv.x;
    }

    vec4 tex = texture2D(tMap, uv);

    // Darken the texture
    tex.rgb *= (1.0 - uDarkness);

    gl_FragColor = tex;
  }
`;

export const particleVertex = /* glsl */ `
  attribute vec3 position;
  uniform mat4 modelViewMatrix;
  uniform mat4 projectionMatrix;

  void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

export const particleFragment = /* glsl */ `
  precision highp float;
  uniform vec3 uColor;
  uniform float uOpacity;

  void main() {
    gl_FragColor = vec4(uColor, uOpacity);
  }
`;
