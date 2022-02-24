import React, { useRef, Suspense, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Physics, useBox } from "@react-three/cannon";
import { Html, Loader, OrthographicCamera } from "@react-three/drei";
import MacbookRef from "./MacbookRef";
import KeyboardRef from "./KeyboardRef";
import HeadphoneRef from "./HeadphoneRef";
import Plane from "./Plane";
import useWindowSize from "../../hooks/useWindowSize";
import { theme } from "../theme";

const Obj = (props) => {
  const { obj } = props;
  if (obj === 0) {
    return <KeyboardRef {...props} color={theme.colors.obj_1} />;
  } else if (obj === 1) {
    return <HeadphoneRef {...props} color={theme.colors.obj_2} />;
  } else {
    return <MacbookRef {...props} color={theme.colors.obj_3} />;
  }
};

const PointerHandle = ({ size }) => {
  const position = [0, 0, 0];
  const args = [size / 2, size, size / 2];

  const [ref, api] = useBox(() => ({ args, position, type: "Kinematic" }));

  useFrame(({ mouse: { x, y }, viewport: { height, width } }) => {
    api.position.set(x * width, 0, -1 * y * height);
  });

  return (
    <mesh ref={ref}>
      <boxBufferGeometry args={args} />
      <meshPhongMaterial opacity={0} transparent />
    </mesh>
  );
};

const Cannon = () => {
  const lightRef1 = useRef();
  const lightRef2 = useRef();

  let items = [];
  for (let i = 0; i < 50; i++) {
    items.push(i);
  }

  // Change zoom value depending on the screen size
  const size = useWindowSize();

  return (
    <Suspense fallback={null}>
      <Canvas
        resize={{ scroll: false }}
        style={{ width: "100vw", height: "100vh" }}
      >
        <OrthographicCamera
          makeDefault
          position={[-1, 1, 1]}
          rotation={[-Math.PI / 4.0, -Math.PI / 8.0, -Math.PI / 8.0]}
          zoom={size.width > 640 ? 100 : 50}
          near={-100}
          far={100}
        />
        <Physics gravity={[0, -1, 0]}>
          <PointerHandle size={3} />
          <Plane
            position={[0, -3, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            color={theme.colors.white}
          />
          <Plane
            position={[0, -3, 10]}
            rotation={[0, Math.PI, 0]}
            color={theme.colors.white}
          />
          <Plane
            position={[0, -3, -10]}
            rotation={[0, 0, 0]}
            color={theme.colors.white}
          />
          <Plane
            position={[-10, -3, 0]}
            rotation={[0, Math.PI / 2.0, 0]}
            color={theme.colors.white}
          />
          <Plane
            position={[10, -3, 0]}
            rotation={[0, -Math.PI / 2.0, 0]}
            color={theme.colors.white}
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
      <Loader containerStyles={{ backgroundColor: 'orange' }} defaultInterpolation={"donghak..."} />
    </Suspense>
  );
};

export default Cannon;
