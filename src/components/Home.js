import React, { Suspense, useRef } from "react";
import "../App.scss";
import { Canvas, useFrame, useThree } from "react-three-fiber";
import { softShadows} from "@react-three/drei";


import Nav from "./Nav";
import Title from "./ui/Title"
import Statue from "./ui/Statue"
import Mac from "./ui/Laptop"

let StatueClicked = false;
let MacClicked = false;
let PhoneClicked = false;

softShadows();
const Light = () => {
  return (
    <group>
      <ambientLight intensity={0.5} />
      <pointLight position={[-5, 2, -10]} intensity={0.5} color="red" />
      <pointLight position={[10, 3, -5]} intensity={1.5} color="blue" />
      <pointLight position={[30, -10, -30]} intensity={1.5} color="green" />
      <directionalLight
        castShadow
        position={[0, 40, 40]}
        intensity={5.0}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={100}
        shadow-camera-left={-100}
        shadow-camera-right={100}
        shadow-camera-top={100}
        shadow-camera-bottom={-100}
        shadow-radius={8}
      />
    </group>
  );
};

const Ground = () => {
  const { viewport } = useThree();
  return (
    <group>
      <mesh
        receiveShadow
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -20, 0]}
      >
        <planeBufferGeometry attach="geometry" args={[1000, 1000]} />
        <meshPhongMaterial attach="material" color="#cccccc" />
      </mesh>
    </group>
  );
};


function Objects() {
  const obj = useRef();
  useFrame(() => {
    // if (!(PhoneClicked || MacClicked || StatueClicked)) {
    //   obj.current.rotation.y += 0.005
    // }
    // obj.current.rotation.y += 0.005
  });

  return (
    <group ref={obj}>
      <Mac />
      <Statue />
      {/* < Phone /> */}
    </group>
  );
}

function Home() {
  return (
    <div className="Home">
      <Nav />
      <Canvas
        shadowMap
        colorManagement
        camera={{ position: [10, 10, 20], fov: 100 }}
        style={{
          width: "70vw",
          height: "100vh",
          position: "absolute",
          top: "0%",
          left: "30vw",
        }}
      >
        <Light />

        <Suspense fallback={null}>
          <Objects />
        </Suspense>
        {/* <OrbitControls/> */}
      </Canvas>
      {/* <Footer /> */}
      <Title />
    </div>
  );
}

export default Home;
