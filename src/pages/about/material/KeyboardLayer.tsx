import React, { Suspense, useRef, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";

import { OrthographicCamera } from "@react-three/drei";
import Keyboard from "../../../components/material/Keyboard";

interface KeyboardLayerInterface {
  rotation: number[];
  color: string;
  style?: {};
}

const KeyboardLayer: React.FC<KeyboardLayerInterface> = ({
  rotation,
  color,
  style,
}) => {
  const lightRef1 = useRef();
  const lightRef2 = useRef();
  const keyboardRef = useRef();

  return (
    <Suspense
      fallback={
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Loading...
        </div>
      }
    >
      <Canvas shadows style={style}>
        <OrthographicCamera
          makeDefault
          position={[0, 0, 0]}
          rotation={[0, 0, 0]}
          zoom={70}
          near={-100}
          far={100}
        />
        <Keyboard
          ref={keyboardRef}
          position={[0, 0, 0]}
          rotation={rotation}
          castShadow
          color={color}
        />
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
    </Suspense>
  );
};

export default KeyboardLayer;
