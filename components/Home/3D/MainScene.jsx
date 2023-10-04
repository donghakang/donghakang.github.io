import { OrbitControls, OrthographicCamera, Stats } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense, lazy, useRef } from 'react'

const ModelComponent = lazy(() => import('./SingleModel'))

function Model(props) {
  return (
    <Suspense fallback={'loading'}>
      <Canvas
        resize={{ scroll: false }}
        style={{
          width: '100vw',
          height: '100vh',
          position: 'absolute',
          zIndex: 0,
        }}
        camera={{ position: [1, 1, 1] }}
      >
        <OrthographicCamera
          makeDefault
          position={[-1, 1, 1]}
          rotation={[-Math.PI / 4.0, -Math.PI / 8.0, -Math.PI / 8.0]}
          zoom={100}
          near={-100}
          far={100}
        />
        <ModelComponent />
        {/* <color attach="background" args={['hotpink']} /> */}
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
        {/* <OrbitControls /> */}
      </Canvas>
    </Suspense>
  )
}

// useGLTF.preload('assets/3d/scene-transformed.glb')
export default Model
