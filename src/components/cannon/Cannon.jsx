import React, { useRef, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/cannon";
import { OrthographicCamera, Loader } from "@react-three/drei";
import MacbookRef from "./MacbookRef";
import KeyboardRef from "./KeyboardRef";
import HeadphoneRef from "./HeadphoneRef";
import Plane from "./Plane";
import {
  keyboardColor,
  macbookColor,
  headphoneColor,
  planeColor,
} from "../color";

const Obj = (props) => {
  const { obj } = props;
  if (obj === 0) {
    return <MacbookRef {...props} color={macbookColor} />;
  } else if (obj === 1) {
    return <KeyboardRef {...props} color={keyboardColor} />;
  } else {
    return <HeadphoneRef {...props} color={headphoneColor} />;
  }
};

const Cannon = () => {
  const lightRef1 = useRef();
  const lightRef2 = useRef();

  let items = [];
  for (let i = 0; i < 50; i++) {
    items.push(i);
  }
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Canvas
        resize={{ scroll: false }}
        style={{ width: "100vw", height: "100vh" }}
      >
        <OrthographicCamera
          makeDefault
          position={[-1, 1, 1]}
          rotation={[-Math.PI / 4.0, -Math.PI / 8.0, -Math.PI / 8.0]}
          zoom={100}
          near={-100}
          far={100}
        />
        <Physics>
          <Plane
            position={[0, -3, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            color={planeColor}
          />
          <Plane
            position={[0, -3, 10]}
            rotation={[0, Math.PI, 0]}
            color={planeColor}
          />
          <Plane
            position={[0, -3, -10]}
            rotation={[0, 0, 0]}
            color={planeColor}
          />
          <Plane
            position={[-10, -3, 0]}
            rotation={[0, Math.PI / 2.0, 0]}
            color={planeColor}
          />
          <Plane
            position={[10, -3, 0]}
            rotation={[0, -Math.PI / 2.0, 0]}
            color={planeColor}
          />
          {items.map((item) => (
            <Obj
              key={`obj-${item}`}
              obj={item % 3}
              rotation={[
                Math.random() * 3,
                Math.random() * 3,
                Math.random() * 3,
              ]}
              position={[
                Math.random() * 10 - 5,
                Math.random() * 5 + 20,
                Math.random() * 10 - 5,
              ]}
            />
          ))}
        </Physics>
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
        {/* <OrbitControls /> */}
      </Canvas>
      <Loader />
    </Suspense>
  );
};

export default Cannon;
