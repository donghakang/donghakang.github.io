import React from 'react';
import * as THREE from "three";

const MetalMaterial = () => {
  return (
    <meshStandardMaterial
      attach="material"
      color={new THREE.Color("#cccccc")}
      roughness={0.2}
      metalness={1.0}
    />
  );
};

export { MetalMaterial };
