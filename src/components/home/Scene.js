import React, { useRef, Suspense } from "react";
import { Canvas } from "@react-three/fiber";

import { softShadows } from "@react-three/drei";
import Headphone from "./Headphone";
import Macbook from "./Macbook";
import Keyboard from "./Keyboard";
import { useSelector } from "react-redux";

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
  const { theme } = useSelector((state) => state.theme);
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
      style={{ width: "100%", height: "100%" }}
      camera={{
        near: -100,
        far: 100,
        zoom: 50,
        position: [-1, 1, 1],
      }}
    >
      <Suspense fallback={null}>
        <Headphone
          ref={headphoneBloomRef}
          position={[3.3, 0, 0.5]}
          castShadow
          color={theme ? "#388e3c" : "#ff8f00"}
        />
        <Keyboard
          ref={keyboardBloomRef}
          position={[-1, 0, 3]}
          rotation={[0, -0.2, 0]}
          color={theme ? "#2e7d32" : "#ff6f00"}
          castShadow
        />
        <Macbook
          ref={macbookBloomRef}
          position={[-1, 0, -1]}
          color={theme ? "#43a047" : "#ffa000"}
          castShadow
        />
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
    </Canvas>
  );
}
