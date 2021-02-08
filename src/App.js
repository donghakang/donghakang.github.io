import Footer from "./components/footer";

import * as THREE from "three";
import React, { Suspense, useRef, useMemo, useState } from "react";
import "./App.scss";

import { Canvas, useFrame } from "react-three-fiber";
import {
  softShadows,
  OrbitControls,
  MeshWobbleMaterial,
  useGLTF,
  Html,
} from "@react-three/drei";
import { Material } from "three";

softShadows();

const Light = () => {
  return (
    <group>
      <ambientLight intensity={0.5} />
      <pointLight position={[-5, 2, -10]} intensity={0.5} />
      <pointLight position={[-10, 3, -5]} intensity={1.5} />
      <directionalLight
        castShadow
        position={[0, 10, 0]}
        intensity={2.0}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
        shadow-radius={8}
      />
    </group>
  );
};

const Ground = () => {
  return (
    <group>
      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -3, 0]}>
        <planeBufferGeometry attach="geometry" args={[100, 100]} />
        <shadowMaterial attach="material" opacity={0.4} />
      </mesh>
    </group>
  );
};

const Model = () => {
  const { nodes, scene } = useGLTF("/scene.gltf");

  const [active, setActive] = useState(false);
  const mesh = useRef(null);
  const gltf = useGLTF("/scene.gltf");

  const vec = new THREE.Vector3(1.5, 1.5, 1.5);
  const vec_origin = new THREE.Vector3(1, 1, 1);

  gltf.scene.children.forEach((mesh, i) => {
    mesh.castShadow = true;
  });
  gltf.castShadow = true;
  gltf.scene.castShadow = true;

  useFrame(() => {
    if (active) {
      mesh.current.scale.lerp(vec, 0.1);
    } else {
      mesh.current.scale.lerp(vec_origin, 0.1);
    }
    mesh.current.rotation.y += 0.005;
  });

  return (
    <mesh 
      castShadow 
      // onClick={(event) => active ? setActive(false) : setActive(true)}
      onPointerUp={(event) => active ? setActive(false) : setActive(true)}
      ref={mesh} 
      position={[0, 0, 0]}>
      <primitive object={gltf.scene} dispose={null} />
    </mesh>
  );
};

function App() {
  return (
    <>
      <Canvas
        shadowMap
        colorManagement
        camera={{ position: [-1, 1, 1], fov: 70 }}
      >
        <Light />
        <Ground />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
        <OrbitControls />
      </Canvas>
      <Footer />
    </>
  );
}

export default App;
