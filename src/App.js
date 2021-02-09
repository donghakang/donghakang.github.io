import Footer from "./components/footer";

import * as THREE from "three";
import React, { Suspense, useRef, useState } from "react";
import "./App.scss";

import { Canvas, useFrame } from "react-three-fiber";
import {
  OrbitControls,
  useGLTF,
  ContactShadows,
  Html,
} from "@react-three/drei";

const Light = () => {
  return (
    <group>
      <ambientLight intensity={0.5} />
      <pointLight position={[-5, 2, -10]} intensity={0.5} />
      <pointLight position={[-10, 3, -5]} intensity={1.5} />
      <directionalLight
        castShadow
        position={[0, 10, 0]}
        intensity={3.0}
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
      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
        <planeBufferGeometry attach="geometry" args={[100, 100]} />
        <shadowMaterial attach="material" opacity={0.4} />
      </mesh>
    </group>
  );
};

function Model() {
  const group = useRef();
  const { nodes, materials } = useGLTF("/scene.gltf");

  const [active, setActive] = useState(false);
  const [hovered, setHover] = useState(false);

  const vec = new THREE.Vector3(1.5, 1.5, 1.5);
  const vec_origin = new THREE.Vector3(1, 1, 1);

  useFrame(() => {
    if (active) {
      group.current.scale.lerp(vec, 0.1);
    } else {
      group.current.scale.lerp(vec_origin, 0.1);
    }
    group.current.rotation.y += 0.005;
  });

  return (
    <group>
      <group
        castShadow
        ref={group}
        dispose={null}
        // onClick={(event) => (active ? setActive(false) : setActive(true))}
        onPointerOver={(e) => (active ? setActive(false) : setActive(true))}
        // onPointerOut={(e) => e.intersections.length === 0 && set(null)}
        // onPointerMissed={() => (state.current = null)}
        onPointerDown={(e) => (active ? setActive(false) : setActive(true))}
      >
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <group position={[0, 0, 0]}>
            <group scale={[0.93, 0.93, 0.93]}>
              <mesh
                material={materials.material}
                geometry={nodes.Plane018_0.geometry}
              />
            </group>
            <group
              position={[-0.38, -0.81, 0.51]}
              rotation={[1.03, -0.46, -0.93]}
              scale={[0.29, 0.29, 0.29]}
            />
            <group scale={[0.93, 0.93, 0.93]}>
              <mesh
                castShadow
                material={materials.material}
                geometry={nodes.Plane003_0.geometry}
              />
            </group>
            <group
              position={[-0.38, -0.81, 0.51]}
              rotation={[-1.06, 0.83, -0.56]}
              scale={[0.29, 0.29, 0.29]}
            />
            <group
              position={[-0.8, 0.45, 0.42]}
              rotation={[-1.94, -0.24, 2.36]}
              scale={[0.29, 0.29, 0.29]}
            />
            <group
              position={[-0.38, -0.81, 0.51]}
              rotation={[-2.51, -0.09, 0.56]}
              scale={[0.29, 0.29, 0.29]}
            />
            <group
              position={[-0.38, -0.81, 0.51]}
              rotation={[-1.12, -0.72, -1.28]}
              scale={[0.29, 0.29, 0.29]}
            />
            <group
              position={[-0.33, 1.21, 0.57]}
              rotation={[-1.94, -0.24, 2.36]}
              scale={[0.29, 0.29, 0.29]}
            />
            <group
              position={[1.3, -0.24, 0.62]}
              rotation={[-1.94, -0.24, 2.36]}
              scale={[0.29, 0.29, 0.29]}
            />
          </group>
        </group>
      </group>
      {active && (
        <Html>
          <div className="content">
            <h1>Resume</h1>
          </div>
        </Html>
      )}
    </group>
  );
}

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
          <ContactShadows
            position={[0, -0.1, 0]}
            opacity={1}
            width={10}
            height={10}
            blur={1} // Amount of blue (default=1)
            far={10} // Focal distance (default=10)
            resolution={256} // Rendertarget resolution (default=256)
          />
        </Suspense>
        <OrbitControls />
      </Canvas>
      <Footer />
    </>
  );
}

export default App;
