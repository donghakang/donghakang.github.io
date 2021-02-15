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

import Statue from './components/Statue'
import Mac from './components/Mac'
import Record from './components/Record'
import Burger from './components/Burger'
import Boombox from './components/Boombox'

const Light = () => {
  return (
    <group>
      <ambientLight intensity={0.5} />
      <pointLight position={[-5, 2, -10]} intensity={0.5} color="red"/>
      <pointLight position={[10, 3, -5]} intensity={1.5} color="blue"/>
      <pointLight position={[30, -10, -30]} intensity={1.5} color="green"/>
      <directionalLight
        castShadow
        position={[0, 10, 0]}
        intensity={3.0}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={100}
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


function App() {
  return (
    <>
      <Canvas
        shadowMap
        colorManagement
        camera={{ position: [50,0,0], fov: 70 }}
      >
        <Light />
        {/* <Ground /> */}
        <Suspense fallback={null}>
          {/* <Statue /> */}
          {/* <Mac /> */}
          <Boombox/>
          {/* <Burger/> */}
        </Suspense>
        <OrbitControls />
      </Canvas>
      <Footer />
    </>
  );
}

export default App;
