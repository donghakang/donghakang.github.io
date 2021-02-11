/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/burger.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        material={materials['Top Bun']}
        geometry={nodes.Top_Bun.geometry}
        position={[0.02, 0.56, 0]}
        rotation={[0, -0.01, -0.08]}
        scale={[0.56, 0.57, 0.56]}
      />
      <mesh material={materials['Lower Bun']} geometry={nodes.Lower_Bun.geometry} scale={[0.55, 0.1, 0.55]} />
      <mesh
        material={materials.Patty}
        geometry={nodes.Patty.geometry}
        position={[0, 0.2, 0]}
        scale={[0.53, 0.11, 0.53]}
      />
      <mesh
        material={materials['Material.001']}
        geometry={nodes.Cheese.geometry}
        position={[0, 0.96, 0]}
        scale={[0.57, 0.57, 0.57]}
      />
      <mesh
        material={materials['Top Bun.001']}
        geometry={nodes.Lettuce.geometry}
        position={[0, 0.38, 0.14]}
        rotation={[0.08, -0.09, -0.01]}
        scale={[0.4, 0.02, 0.4]}
      />
      <mesh
        material={materials.Tomatao}
        geometry={nodes.Tomato.geometry}
        position={[0, 0.32, -0.2]}
        scale={[0.34, 0.03, 0.34]}
      />
      <mesh
        material={materials['Material.003']}
        geometry={nodes.seed001.geometry}
        position={[0.05, 0.79, 0.04]}
        rotation={[1.69, -0.11, -0.27]}
        scale={[0.01, 0.02, 0.01]}
      />
      <mesh
        material={materials['Material.003']}
        geometry={nodes.seed002.geometry}
        position={[-0.04, 0.79, 0.03]}
        rotation={[1.61, 0.04, 1.29]}
        scale={[0.01, 0.02, 0.01]}
      />
      <mesh
        material={materials['Material.003']}
        geometry={nodes.seed004.geometry}
        position={[0.37, 0.53, 0.34]}
        rotation={[2.58, -0.81, -0.38]}
        scale={[0.01, 0.02, 0.01]}
      />
      <mesh
        material={materials['Material.003']}
        geometry={nodes.seed005.geometry}
        position={[0.45, 0.51, -0.24]}
        rotation={[0.71, -0.99, -2.56]}
        scale={[0.01, 0.02, 0.01]}
      />
      <mesh
        material={materials['Material.003']}
        geometry={nodes.seed006.geometry}
        position={[0.54, 0.44, -0.02]}
        rotation={[1.38, -1.14, -1.79]}
        scale={[0.01, 0.02, 0.01]}
      />
      <mesh
        material={materials['Material.003']}
        geometry={nodes.seed008.geometry}
        position={[-0.02, 0.63, -0.44]}
        rotation={[0.69, 0.02, 3.02]}
        scale={[0.01, 0.02, 0.01]}
      />
      <mesh
        material={materials['Material.003']}
        geometry={nodes.seed009.geometry}
        position={[-0.24, 0.61, -0.38]}
        rotation={[0.83, 0.45, 2.61]}
        scale={[0.01, 0.02, 0.01]}
      />
      <mesh
        material={materials['Material.003']}
        geometry={nodes.seed010.geometry}
        position={[-0.31, 0.68, -0.23]}
        rotation={[1.07, 0.68, 2.23]}
        scale={[0.01, 0.02, 0.01]}
      />
      <mesh
        material={materials['Material.003']}
        geometry={nodes.seed011.geometry}
        position={[0.17, 0.61, 0.42]}
        rotation={[2.45, -0.27, -0.12]}
        scale={[0.01, 0.02, 0.01]}
      />
      <mesh
        material={materials['Material.003']}
        geometry={nodes.seed012.geometry}
        position={[0.46, 0.55, 0.17]}
        rotation={[1.96, -0.91, -1.07]}
        scale={[0.01, 0.02, 0.01]}
      />
      <mesh
        material={materials['Material.003']}
        geometry={nodes.seed014.geometry}
        position={[-0.01, 0.7, -0.34]}
        rotation={[1.15, -0.04, 3.03]}
        scale={[0.01, 0.02, 0.01]}
      />
      <mesh
        material={materials['Material.003']}
        geometry={nodes.seed015.geometry}
        position={[-0.24, 0.7, -0.26]}
        rotation={[1.29, 0.25, 2.29]}
        scale={[0.01, 0.02, 0.01]}
      />
      <mesh
        material={materials['Material.003']}
        geometry={nodes.seed016.geometry}
        position={[-0.26, 0.74, -0.06]}
        rotation={[1.52, 0.34, 1.68]}
        scale={[0.01, 0.02, 0.01]}
      />
      <mesh
        material={materials['Material.003']}
        geometry={nodes.seed017.geometry}
        position={[0.14, 0.69, 0.32]}
        rotation={[1.98, -0.19, -0.23]}
        scale={[0.01, 0.02, 0.01]}
      />
      <mesh
        material={materials['Material.003']}
        geometry={nodes.seed018.geometry}
        position={[0.41, 0.65, 0.06]}
        rotation={[1.62, -0.5, -1.45]}
        scale={[0.01, 0.02, 0.01]}
      />
      <mesh
        material={materials['Material.003']}
        geometry={nodes.seed019.geometry}
        position={[0.32, 0.69, -0.12]}
        rotation={[1.36, -0.45, -2.11]}
        scale={[0.01, 0.02, 0.01]}
      />
      <mesh
        material={materials['Material.003']}
        geometry={nodes.seed020.geometry}
        position={[0.24, 0.68, -0.27]}
        rotation={[1.23, -0.34, -2.52]}
        scale={[0.01, 0.02, 0.01]}
      />
      <mesh
        material={materials['Material.003']}
        geometry={nodes.seed021.geometry}
        position={[0.1, 0.67, -0.38]}
        rotation={[1.14, -0.12, -3.08]}
        scale={[0.01, 0.02, 0.01]}
      />
      <mesh
        material={materials['Material.003']}
        geometry={nodes.seed022.geometry}
        position={[0.21, 0.75, 0.07]}
        rotation={[1.69, -0.42, -1.24]}
        scale={[0.01, 0.02, 0.01]}
      />
      <mesh
        material={materials['Material.003']}
        geometry={nodes.seed025.geometry}
        position={[-0.18, 0.48, 0.49]}
        rotation={[2.91, 0.28, 0.14]}
        scale={[0.01, 0.02, 0.01]}
      />
      <mesh
        material={materials['Material.003']}
        geometry={nodes.seed026.geometry}
        position={[0.53, 0.41, 0.14]}
        rotation={[2.75, -1.25, -0.35]}
        scale={[0.01, 0.02, 0.01]}
      />
      <mesh
        material={materials['Material.004']}
        geometry={nodes.seed003.geometry}
        position={[-0.38, 0.61, 0.23]}
        rotation={[0.58, 0.95, 2.25]}
        scale={[0.01, 0.02, 0.01]}
      />
      <mesh
        material={materials['Material.005']}
        geometry={nodes.seed023.geometry}
        position={[-0.14, 0.73, 0.24]}
        rotation={[0.58, 0.93, 1.84]}
        scale={[0.01, 0.02, 0.01]}
      />
      <mesh
        material={materials['Material.006']}
        geometry={nodes.seed024.geometry}
        position={[-0.17, 0.67, 0.36]}
        rotation={[-2.03, -1.07, 1.64]}
        scale={[0.01, 0.02, 0.01]}
      />
    </group>
  )
}

useGLTF.preload('/burger.gltf')
