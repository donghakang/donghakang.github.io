import Footer from "./components/footer";

import React, { Suspense, useRef, useState } from "react";
import "./App.scss";

import { Canvas, useFrame, useThree } from "react-three-fiber";
import { useSpring, animated } from "react-spring";
import {
  OrbitControls,
  useGLTF,
  softShadows,
  Html
} from "@react-three/drei";



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
        position={[0, 40, 20]}
        intensity={3.0}
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
  const { viewport } = useThree()
  return (
    <group>
      <mesh
        receiveShadow
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -20, 0]}  >
        <planeBufferGeometry attach="geometry" args={[1000, 1000]} />
        <meshPhongMaterial attach="material" color="#cccccc" />
      </mesh>
    </group>
  );
};





function Mac(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/mac.gltf')

  const [active, setActive] = useState(false)
  const animate = useSpring({ opacity: active ? 1 : 0 })

  useFrame(() => {
    group.current.rotation.x += 0.02
    group.current.rotation.y += 0.01
  })

  return (
    <group
      onPointerDown={(e) => setActive(!active)}
    >
      <group position={[20, 0, 10]} >
        <group ref={group} {...props} dispose={null}>
          <group position={[-4.7, 0, 0]} scale={[.01, .01, .01]}>
            <mesh
              castShadow
              material={
                materials['Mac.Tri.Baked']}
              geometry={nodes.Mac_Tri_Baked_MacTriBaked_0.geometry}
            >
              <meshStandardMaterial
                attach="material"
                color="white"
                roughness={0.3}
                metalness={0.2} />
              <Html scaleFactor={80}>
                <animated.div style={animate} className="content">
                  PROJECT
                </animated.div>
              </Html>
            </mesh>
          </group>
        </group >
      </group>

    </group>
  )
}

function Statue(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/statue.gltf')

  const [active, setActive] = useState(false)
  const animate = useSpring({ opacity: active ? 1 : 0 })

  useFrame(() => {
    group.current.rotation.x += 0.02
  })

  // TODO: clickable change
  return (
    <group position={[0, 0, -15]}>
      <group ref={group}  {...props} dispose={null}>
        <group position={[4.6, 6.8, -8.4]} rotation={[Math.PI / 2, -Math.PI / 2, Math.PI / 8]}>
          <group
            onPointerDown={(e) => setActive(!active)} >

            <mesh position={[10, 6.5, 5]} rotation={[0, 0, -Math.PI / 8]} scale={[20, 10, 10]}>
              <boxBufferGeometry position={[0, 0, 0]} />
              <meshStandardMaterial transparent={true} opacity={0.0} />
            </mesh>
          </group>
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
      <Html scaleFactor={80}>
        <animated.div style={animate} className="content">
          ABOUT ME
                </animated.div>
      </Html>
    </group>
  )
}




function Phone(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/phone.gltf')

  const [active, setActive] = useState(false)
  const animate = useSpring({ opacity: active ? 1 : 0 })
  useFrame(() => {
    // group.current.rotation.y += 0.1
  })

  return (
    
    <group position={[-20, 0, 10]}>
      <group ref={group} {...props} dispose={null}>
          <group scale={[.7, .7, .7]} position={[0, 0, 2.5]} rotation={[Math.PI / 2, 0, 0]}>
          <group
            onPointerDown={(e) => setActive(!active)} >
            <mesh position={[0, -5, 0]} rotation={[0, 0, 0]} scale={[10,10,30]}>
              <boxBufferGeometry position={[0, 0, 0]} />
              <meshStandardMaterial transparent={true} opacity={0.0} />
            </mesh>
          </group>
            <mesh castShadow material={materials.material_0} geometry={nodes.mesh_0.geometry} >
              <meshStandardMaterial
                attach="material"
                color="white"
                roughness={0.3}
                metalness={0.2}
              />
            </mesh>
            <mesh castShadow material={materials.Phone_body} geometry={nodes.mesh_1.geometry} >
              <meshStandardMaterial
                attach="material"
                color="white"
                roughness={0.3}
                metalness={0.2}
              />
            </mesh>
            <mesh castShadow material={materials.Ariel} geometry={nodes.mesh_2.geometry} >
              <meshStandardMaterial
                attach="material"
                color="white"
                roughness={0.3}
                metalness={0.2}
              />
            </mesh>
            <mesh castShadow material={materials['Material.002']} geometry={nodes.mesh_3.geometry} >
              <meshStandardMaterial
                attach="material"
                color="white"
                roughness={0.3}
                metalness={0.2}
              />
            </mesh>
            <mesh castShadow material={materials.phone_Face} geometry={nodes.mesh_4.geometry} >
              <meshStandardMaterial
                attach="material"
                color="white"
                roughness={0.3}
                metalness={0.2}
              />
            </mesh>
            <mesh castShadow material={materials['Material.003']} geometry={nodes.mesh_5.geometry} >
              <meshStandardMaterial
                attach="material"
                color="white"
                roughness={0.3}
                metalness={0.2}
              />
            </mesh>
            <mesh castShadow material={materials.Screen} geometry={nodes.mesh_6.geometry} >
              <meshStandardMaterial
                attach="material"
                color="white"
                roughness={0.3}
                metalness={0.2}
              />
            </mesh>
            <mesh castShadow material={materials['Material.004']} geometry={nodes.mesh_7.geometry} >
              <meshStandardMaterial
                attach="material"
                color="white"
                roughness={0.3}
                metalness={0.2}
              />
            </mesh>
            <mesh castShadow material={materials['Material.005']} geometry={nodes.mesh_8.geometry} >
              <meshStandardMaterial
                attach="material"
                color="white"
                roughness={0.3}
                metalness={0.2}
              />
            </mesh>
            <mesh castShadow material={materials['Material.010']} geometry={nodes.mesh_9.geometry} >
              <meshStandardMaterial
                attach="material"
                color="white"
                roughness={0.3}
                metalness={0.2}
              />
            </mesh>
            <mesh castShadow material={materials['Material.006']} geometry={nodes.mesh_10.geometry} >
              <meshStandardMaterial
                attach="material"
                color="white"
                roughness={0.3}
                metalness={0.2}
              />
            </mesh>
            <mesh castShadow material={materials['Material.007']} geometry={nodes.mesh_11.geometry} >
              <meshStandardMaterial
                attach="material"
                color="white"
                roughness={0.3}
                metalness={0.2}
              />
            </mesh>
            <mesh castShadow material={materials['Material.008']} geometry={nodes.mesh_12.geometry} >
              <meshStandardMaterial
                attach="material"
                color="white"
                roughness={0.3}
                metalness={0.2}
              />
            </mesh>
            <mesh castShadow material={materials['Material.009']} geometry={nodes.mesh_13.geometry} >
              <meshStandardMaterial
                attach="material"
                color="white"
                roughness={0.3}
                metalness={0.2}
              />
            </mesh>
            <mesh castShadow material={materials.SVGMat} geometry={nodes.mesh_14.geometry} >
              <meshStandardMaterial
                attach="material"
                color="white"
                roughness={0.3}
                metalness={0.2}
              />
            </mesh>
          </group>
          
        </group>
        <Html scaleFactor={80}>
                <animated.div style={animate} className="content">
                  CONTACT
                </animated.div>
              </Html>
      </group>

  )
}

function Objects(props) {
  const obj = useRef();
  const statue = useRef();
  const mac = useRef();
  const phone = useRef();
  useFrame(() => {
    obj.current.rotation.y += 0.005
  })

  return (
    <group ref={obj}>
      <Mac />
      <Statue />
      < Phone />
    </group>
  )
}




function App() {
  return (
    <>
      <Canvas
        shadowMap
        colorManagement
        camera={{ position: [10, 20, 40], fov: 70 }}
      >
        <Ground />
        <Light />

        <Suspense fallback={null}>
          <Objects />
          {/* <Statue />
            <Mac />
            <Phone/> */}
        </Suspense>
        <OrbitControls />
      </Canvas>
      <Footer />
    </>
  );
}

export default App;
