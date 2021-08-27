import React, { useRef, Suspense } from "react";
import { Canvas } from "@react-three/fiber";

import {
  softShadows,
  OrthographicCamera,
  OrbitControls,
} from "@react-three/drei";
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
  const { screenMode } = useSelector((state) => state.screenMode);

  const lightRef1 = useRef();
  const lightRef2 = useRef();
  const headphoneBloomRef = useRef();
  const keyboardBloomRef = useRef();
  const macbookBloomRef = useRef();

  return (
    <Canvas shadows>
      <OrthographicCamera
        makeDefault
        position={[-1, 1, 1]}
        rotation={[-Math.PI/4.0, -Math.PI/8.0, -Math.PI/8.0]}
        zoom={screenMode ? 50 : 30}
        near={-100}
        far={100}
      />
      {/* <OrbitControls /> */}
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
    </Canvas>
  );
}
