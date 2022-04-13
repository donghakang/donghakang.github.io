import * as THREE from "three"
import React, { useRef } from "react"
import { Canvas } from "@react-three/fiber"

import { OrthographicCamera } from "@react-three/drei"
import { Keyboard } from "../../object"
import { Physics } from "@react-three/cannon"

interface KeyboardParallaxInterface {
  rotation: number[]
  color: string
  style?: object
  zoom: number
}

const KeyboardParallax: React.FC<KeyboardParallaxInterface> = ({
  rotation,
  color,
  style,
  zoom,
}) => {
  const lightRef1 = useRef()
  const lightRef2 = useRef()
  const keyboardRef = useRef<THREE.Mesh>(null)

  return (
    <Canvas shadows style={style}>
      <OrthographicCamera
        makeDefault
        position={[0, 0, 0]}
        rotation={[0, 0, 0]}
        zoom={zoom}
        near={-100}
        far={100}
      />
      <Physics>
        <Keyboard
          ref={keyboardRef}
          {...{
            position: [0, 0, 0],
            rotation: rotation,
            castShadow: true,
            color: color,
          }}
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
  )
}

export default KeyboardParallax
