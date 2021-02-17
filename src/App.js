import Footer from "./components/footer";

import * as THREE from "three";
import React, { Suspense, useRef, useEffect } from "react";
import "./App.scss";

import { Canvas, useFrame, useThree } from "react-three-fiber";
import {
  OrbitControls,
  useGLTF,
  ContactShadows,
  Html,
  OrthographicCamera,
} from "@react-three/drei";

// import Statue from './components/Statue'
// // import Mac from './components/Mac'
// import Record from './components/Record'
// import Burger from './components/Burger'
// import Phone from './components/Phone'


const Light = () => {
  return (
    <group>
      <ambientLight intensity={0.5} />
      <pointLight position={[-5, 2, -10]} intensity={0.5} color="red" />
      <pointLight position={[10, 3, -5]} intensity={1.5} color="blue" />
      <pointLight position={[30, -10, -30]} intensity={1.5} color="green" />
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


function Mac(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/mac.gltf')

  return (
    <group position={[20, 0, 10]}>
      <group ref={group} {...props} dispose={null}>
        <group position={[-4.7, 0, 0]} scale={[.01, .01, .01]}>
          <mesh material={
            materials['Mac.Tri.Baked']}
            geometry={nodes.Mac_Tri_Baked_MacTriBaked_0.geometry}
          >
            <meshStandardMaterial
              attach="material"
              color="white"
              roughness={0.3}
              metalness={0.2} />
          </mesh>
        </group>
      </group >
    </group>
  )
}

function Statue(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/statue.gltf')

  return (
  <group position={[0, 0, -15]}>
    <group ref={group} {...props} dispose={null}>
      <group position={[4.6, 6.8, -8.4]} rotation={[Math.PI / 2, -Math.PI / 2, Math.PI / 8]}>
        <mesh castShadow material={materials.material_0} geometry={nodes.mesh_0.geometry}>
          <meshStandardMaterial
            attach="material"
            color="white"
            roughness={0.3}
            metalness={0.2}
          />
        </mesh>
        <mesh castShadow material={materials.material_0} geometry={nodes.mesh_1.geometry} >
          <meshStandardMaterial
            attach="material"
            color="white"
            roughness={0.3}
            metalness={0.2}
          />
        </mesh>
        <mesh castShadow material={materials.material_0} geometry={nodes.mesh_2.geometry} >
          <meshStandardMaterial
            attach="material"
            color="white"
            roughness={0.3}
            metalness={0.2}
          />
        </mesh>
        <mesh castShadow material={materials.material_0} geometry={nodes.mesh_3.geometry} >
          <meshStandardMaterial
            attach="material"
            color="white"
            roughness={0.3}
            metalness={0.2}
          />
        </mesh>
        <mesh castShadow material={materials.material_0} geometry={nodes.mesh_4.geometry} >
          <meshStandardMaterial
            attach="material"
            color="white"
            roughness={0.3}
            metalness={0.2}
          />
        </mesh>
        <mesh castShadow material={materials.material_0} geometry={nodes.mesh_5.geometry} >
          <meshStandardMaterial
            attach="material"
            color="white"
            roughness={0.3}
            metalness={0.2}
          />
        </mesh>
        <mesh castShadow material={materials.material_0} geometry={nodes.mesh_6.geometry} >
          <meshStandardMaterial
            attach="material"
            color="white"
            roughness={0.3}
            metalness={0.2}
          />
        </mesh>
        <mesh castShadow material={materials.material_0} geometry={nodes.mesh_7.geometry} >
          <meshStandardMaterial
            attach="material"
            color="white"
            roughness={0.3}
            metalness={0.2}
          />
        </mesh>
        <mesh castShadow material={materials.material_0} geometry={nodes.mesh_8.geometry} >
          <meshStandardMaterial
            attach="material"
            color="white"
            roughness={0.3}
            metalness={0.2}
          />
        </mesh>
        <mesh castShadow material={materials.material_0} geometry={nodes.mesh_9.geometry} >
          <meshStandardMaterial
            attach="material"
            color="white"
            roughness={0.3}
            metalness={0.2}
          />
        </mesh>
        <mesh castShadow material={materials.material_0} geometry={nodes.mesh_10.geometry} >
          <meshStandardMaterial
            attach="material"
            color="white"
            roughness={0.3}
            metalness={0.2}
          />
        </mesh>
      </group>
    </group>
  </group>
  )
}

function Phone(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/phone.gltf')

  return (
    <group position={[-20, 0, 10]}>
      <group ref={group} {...props} dispose={null}>
        <group scale={[.7, .7, .7]} position={[0, 0, 2.5]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh material={materials.material_0} geometry={nodes.mesh_0.geometry} >
            <meshStandardMaterial
              attach="material"
              color="white"
              roughness={0.3}
              metalness={0.2}
            />
          </mesh>
          <mesh material={materials.Phone_body} geometry={nodes.mesh_1.geometry} >
            <meshStandardMaterial
              attach="material"
              color="white"
              roughness={0.3}
              metalness={0.2}
            />
          </mesh>
          <mesh material={materials.Ariel} geometry={nodes.mesh_2.geometry} >
            <meshStandardMaterial
              attach="material"
              color="white"
              roughness={0.3}
              metalness={0.2}
            />
          </mesh>
          <mesh material={materials['Material.002']} geometry={nodes.mesh_3.geometry} >
            <meshStandardMaterial
              attach="material"
              color="white"
              roughness={0.3}
              metalness={0.2}
            />
          </mesh>
          <mesh material={materials.phone_Face} geometry={nodes.mesh_4.geometry} >
            <meshStandardMaterial
              attach="material"
              color="white"
              roughness={0.3}
              metalness={0.2}
            />
          </mesh>
          <mesh material={materials['Material.003']} geometry={nodes.mesh_5.geometry} >
            <meshStandardMaterial
              attach="material"
              color="white"
              roughness={0.3}
              metalness={0.2}
            />
          </mesh>
          <mesh material={materials.Screen} geometry={nodes.mesh_6.geometry} >
            <meshStandardMaterial
              attach="material"
              color="white"
              roughness={0.3}
              metalness={0.2}
            />
          </mesh>
          <mesh material={materials['Material.004']} geometry={nodes.mesh_7.geometry} >
            <meshStandardMaterial
              attach="material"
              color="white"
              roughness={0.3}
              metalness={0.2}
            />
          </mesh>
          <mesh material={materials['Material.005']} geometry={nodes.mesh_8.geometry} >
            <meshStandardMaterial
              attach="material"
              color="white"
              roughness={0.3}
              metalness={0.2}
            />
          </mesh>
          <mesh material={materials['Material.010']} geometry={nodes.mesh_9.geometry} >
            <meshStandardMaterial
              attach="material"
              color="white"
              roughness={0.3}
              metalness={0.2}
            />
          </mesh>
          <mesh material={materials['Material.006']} geometry={nodes.mesh_10.geometry} >
            <meshStandardMaterial
              attach="material"
              color="white"
              roughness={0.3}
              metalness={0.2}
            />
          </mesh>
          <mesh material={materials['Material.007']} geometry={nodes.mesh_11.geometry} >
            <meshStandardMaterial
              attach="material"
              color="white"
              roughness={0.3}
              metalness={0.2}
            />
          </mesh>
          <mesh material={materials['Material.008']} geometry={nodes.mesh_12.geometry} >
            <meshStandardMaterial
              attach="material"
              color="white"
              roughness={0.3}
              metalness={0.2}
            />
          </mesh>
          <mesh material={materials['Material.009']} geometry={nodes.mesh_13.geometry} >
            <meshStandardMaterial
              attach="material"
              color="white"
              roughness={0.3}
              metalness={0.2}
            />
          </mesh>
          <mesh material={materials.SVGMat} geometry={nodes.mesh_14.geometry} >
            <meshStandardMaterial
              attach="material"
              color="white"
              roughness={0.3}
              metalness={0.2}
            />
          </mesh>
        </group>
      </group>
    </group>
  )
}



function Camera(props) {
  const ref = useRef()
  const { setDefaultCamera } = useThree()
  // Make the camera known to the system
  useEffect(() => void setDefaultCamera(ref.current), [])
  // Update it every frame
  useFrame(() => {
    // ref.current.updateMatrixWorld();
    ref.current.rotation.y += 0.01
  })
  return <orthographicCamera ref={ref} {...props} />
}


function App() {
  return (
    <>
      <Canvas
        shadowMap
        colorManagement
      >
        <Camera position={[0, 0, 0]} rotation={[0, -Math.PI/4, 0]}/>
        <Light />
        {/* <Ground /> */}
        <Suspense fallback={null}>
            <Statue />
            <Mac />
            {/* <Burger/> */}
            <Phone/>
        </Suspense>
        {/* <OrbitControls /> */}
      </Canvas>
      <Footer />
    </>
  );
}

export default App;
