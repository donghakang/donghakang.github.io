import { OrbitControls, OrthographicCamera, Stats } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense, lazy, useRef } from 'react'

const ModelComponent = lazy(() => import('./SingleModel'))

function Model(props) {
  const positions = [...Array(100)].map(() => ({
    position: [
      25 - Math.random() * 50,
      25 - Math.random() * 50,
      Math.random() * 50,
    ],
    rotation: [
      Math.random() * Math.PI * 2,
      Math.random() * Math.PI * 2,
      Math.random() * Math.PI * 2,
    ],
  }))

  return (
    <Suspense fallback={<>Loading</>}>
      <Canvas
        resize={{ scroll: false }}
        style={{
          width: '100vw',
          height: '100vh',
          position: 'absolute',
          zIndex: 0,
        }}
        // Quick shortcut for setting up shadow maps
        shadows
        // Only render on changes and movement
        camera={{ position: [0, 0, 40] }}
      >
        {positions.map((data) => (
          <ModelComponent
            followCam
            // scale={0.02}
            position={data.position}
            rotation={data.rotation}
          />
        ))}
        <group>
          <ambientLight intensity={0.4} />
          <directionalLight
            castShadow
            // ref={lightRef2}
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
        {/* <axesHelper args={[5]} /> */}
        {/* <gridHelper /> */}
        {/* <Stats /> */}
      </Canvas>
    </Suspense>
  )
}

// useGLTF.preload('assets/3d/scene-transformed.glb')
export default Model
