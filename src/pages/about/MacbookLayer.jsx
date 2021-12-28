import React, { Suspense, useRef, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";

import { OrthographicCamera } from "@react-three/drei";
import Macbook from "../../components/material/Macbook";

function MacbookLayer({ rotation, color }) {
  const lightRef1 = useRef();
  const lightRef2 = useRef();
  const macbookRef = useRef();

  const [rot, setRot] = useState(0);

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
      <Canvas shadows>
        <OrthographicCamera
          makeDefault
          position={[0, 0, 0]}
          rotation={[-Math.PI / 4.0, -Math.PI / 8.0, -Math.PI / 8.0]}
          zoom={70}
          near={-100}
          far={100}
        />
        <Macbook
          ref={macbookRef}
          position={[1, 0, 1]}
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
}

export default MacbookLayer;
