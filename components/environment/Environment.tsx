import { Suspense, useRef } from 'react'
import { Loader, OrthographicCamera } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { Physics, Triplet, useBox } from '@react-three/cannon'
import { Plane } from '../object'
import { HeadphoneComponent, KeyboardComponent, MacbookComponent } from '.'

export interface ObjInterface {
  position: [number, number, number]
  rotation: [number, number, number]
  obj: number
}

const Obj: React.FC<ObjInterface> = ({ position, rotation, obj }) => {
  if (obj === 0) {
    return (
      <KeyboardComponent
        rotation={rotation}
        position={position}
        color={'#0078f4'}
      />
    )
  } else if (obj === 1) {
    return (
      <HeadphoneComponent
        rotation={rotation}
        position={position}
        color={'#67a6ff'}
      />
    )
  } else {
    return (
      <MacbookComponent
        rotation={rotation}
        position={position}
        color={'#004dc0'}
      />
    )
  }
}

const PointerHandle: React.FC<{ size: number }> = ({ size }) => {
  const position: Triplet = [0, 0, 0]
  const args: Triplet = [size / 2, size, size / 2]

  const [ref, api] = useBox(() => ({ args, position, type: 'Kinematic' }))

  useFrame(({ mouse: { x, y }, viewport: { height, width } }) => {
    api.position.set(x * width, 0, -1 * y * height)
  })

  return (
    <mesh ref={ref}>
      <boxBufferGeometry args={args} />
      <meshPhongMaterial opacity={0} transparent />
    </mesh>
  )
}

const Environment = () => {
  const lightRef1 = useRef()
  const lightRef2 = useRef()

  const items = []
  for (let i = 0; i < 50; i++) {
    items.push(i)
  }

  // Change zoom value depending on the screen size
  // const size = useWindowSize();

  return (
    <>
      <Canvas
        resize={{ scroll: false }}
        style={{ width: '100vw', height: '100vh' }}
      >
        <OrthographicCamera
          makeDefault
          position={[-1, 1, 1]}
          rotation={[-Math.PI / 4.0, -Math.PI / 8.0, -Math.PI / 8.0]}
          zoom={100}
          near={-100}
          far={100}
        />
        <Physics gravity={[0, -9.81, 0]}>
          <PointerHandle size={3} />
          <Plane
            position={[0, -3, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            color={'#ffffff'}
          />
          <Plane
            position={[0, -3, 10]}
            rotation={[0, Math.PI, 0]}
            color={'#ffffff'}
          />
          <Plane
            position={[0, -3, -10]}
            rotation={[0, 0, 0]}
            color={'#ffffff'}
          />
          <Plane
            position={[-10, -3, 0]}
            rotation={[0, Math.PI / 2.0, 0]}
            color={'#ffffff'}
          />
          <Plane
            position={[10, -3, 0]}
            rotation={[0, -Math.PI / 2.0, 0]}
            color={'#ffffff'}
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
      <Loader containerStyles={{ backgroundColor: 'orange' }} />
    </>
  )
}

export default Environment
