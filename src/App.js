import * as THREE from "three";
import React, { useRef, useState } from "react";
import "./App.scss";

import { Canvas, useFrame } from "react-three-fiber";
import {
  softShadows,
  OrbitControls,
  MeshWobbleMaterial,
  Html
} from "@react-three/drei";

softShadows();

const Light = () => {
  return (
    <group>
      <ambientLight intensity={0.5} />
      <pointLight position={[-10, 0, -20]} intensity={0.5} />
      <pointLight position={[0, -10, 0]} intensity={1.5} />
      <directionalLight
        castShadow
        position={[0, 10, 0]}
        intensity={1.0}
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

const SpinningMesh = ({ position, size, color, speed }) => {
  const mesh = useRef(null);

  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  const vec = new THREE.Vector3(2, 2, 2);
  const vec_origin = new THREE.Vector3(1, 1, 1);
  useFrame(() => {
    if (hovered) {
      mesh.current.scale.lerp(vec, 0.1);
    } else {
      mesh.current.scale.lerp(vec_origin, 0.1);
    }
    mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
  });

  return (
    <mesh
      castShadow
      position={position}
      ref={mesh}
      scale={[1,1,1]}
      onClick={(event) =>
        (window.location.href = "https://www.github.com/donghakang")
      }
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <boxBufferGeometry attach="geometry" args={size} />
      {/* <meshStandardMaterial attach="material" color={color} /> */}
      <MeshWobbleMaterial
        attach="material"
        color={hovered ? { color } : "green"}
        speed={speed}
        factor={0.6}
      />
      <Html scaleFactor={10}>
        <div class="content">
          Suspense <br />
          Dongha Kang
        </div>
      </Html>
    </mesh>
  );
};

function App() {
  return (
    <>
      <Canvas
        shadowMap
        colorManagement
        camera={{ position: [-5, 2, 10], fov: 60 }}
      >
        <Light />
        <group>
          <mesh
            receiveShadow
            rotation={[-Math.PI / 2, 0, 0]}
            position={[0, -3, 0]}
          >
            <planeBufferGeometry attach="geometry" args={[100, 100]} />
            <shadowMaterial attach="material" opacity={0.4} />
          </mesh>
        </group>
        <SpinningMesh
          position={[0, 1, 0]}
          size={[3, 1, 2]}
          color="green"
          speed={4}
        />
        <SpinningMesh position={[-2, 1, -5]} color="pink" speed={1} />
        <SpinningMesh position={[5, 1, -2]} color="pink" speed={1} />
        <OrbitControls />
      </Canvas>
    </>
  );
}

export default App;
