import { css } from "@emotion/react";
import { Physics } from "@react-three/cannon";
import { OrthographicCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { MacbookParallax } from "../about/object";
import { Macbook, Keyboard, Headphone } from "../object";

const Loader = () => {
  const lightRef1 = useRef();
  const lightRef2 = useRef();
  const macbookRef = useRef();
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((rotation) => (rotation += 1));
    }, 10);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Canvas style={{ width: "100vw", height: "100vh" }}>
        <OrthographicCamera
          makeDefault
          position={[0, 1, 0]}
          rotation={[0, 0, 0]}
          zoom={40}
          near={-100}
          far={100}
        />
        <Physics>
          <Macbook
            ref={macbookRef}
            position={[0, 0, 0]}
            rotation={[0.4, rotation / 100, 0.4]}
            castShadow
            color={"#1e90ff"}
          />
          <Keyboard
            ref={macbookRef}
            position={[-2, 0, 0]}
            rotation={[0, rotation / 100, 0]}
            castShadow
            color={"#1e90ff"}
          />
          <Headphone
            ref={macbookRef}
            position={[1, 0, 1]}
            rotation={[0.1, rotation / 100, 0.9]}
            castShadow
            color={"#1e90ff"}
          />
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
      </Canvas>
    </div>
  );
};

export default Loader;
