import React, { useRef, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stats, softShadows } from "@react-three/drei";
import Headphone from "./Headphone";
import Macbook from "./Macbook";
import Keyboard from "./Keyboard";

softShadows();

function GroundPlane() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.2, 0]} receiveShadow>
      <planeBufferGeometry attach="geometry" args={[100, 100]} />
      <shadowMaterial attach="material" transparent opacity={0.3} />
    </mesh>
  );
}

export default function Scene() {
  const lightRef1 = useRef();
  const lightRef2 = useRef();
  const headphoneBloomRef = useRef();
  const keyboardBloomRef = useRef();
  const macbookBloomRef = useRef();

  // const { size, viewport } = useThree();
  // const aspect_ratio = size.width / viewport.width;

  return (
    <Canvas
      shadows
      orthographic
      style={{ width: "50%", height: "100%" }}
      camera={{
        near: -100,
        far: 100,
        zoom: 50,
        position: [-1, 1, 1],
      }}
    >
      <Suspense fallback={null}>
        <Headphone ref={headphoneBloomRef} position={[2, 0, 0]} castShadow />
        <Keyboard ref={keyboardBloomRef} position={[-3, 0, 1]} castShadow />
        <Macbook ref={macbookBloomRef} position={[-3, 0, -2]} castShadow />
        <GroundPlane />

        <group>
          <ambientLight intensity={0.4} ref={lightRef1} />
          <directionalLight
            castShadow
            ref={lightRef2}
            position={[2.5, 8, 5]}
            intensity={1.5}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-far={50}
            shadow-camera-left={-10}
            shadow-camera-right={10}
            shadow-camera-top={10}
            shadow-camera-bottom={-10}
          />
        </group>
      </Suspense>

      <OrbitControls />
    </Canvas>
  );
}
