import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import theme from '@/styles/theme'
import { useFrame } from '@react-three/fiber'

export default function Model(props) {
  const { nodes, materials } = useGLTF(
    'http://localhost:3000/assets/3d/scene.gltf',
  )

  const meshRef = useRef()

  useFrame(({ mouse, viewport }, delta) => {
    if (props.followCam) {
      const x = (mouse.x * viewport.width) / 5
      const y = (mouse.y * viewport.height) / 5
      meshRef.current.lookAt(x, y, 1)
    } else {
      meshRef.current.rotation.y += delta
    }
  })

  return (
    <group ref={meshRef} scale={0.2} dispose={null} {...props}>
      <mesh geometry={nodes.Object_2.geometry} material={materials.material_0}>
        <meshPhongMaterial color={theme.color.primary} />
      </mesh>
      <mesh geometry={nodes.Object_3.geometry} material={materials.material_0}>
        <meshPhongMaterial color={theme.color.primary} />
      </mesh>
      <mesh geometry={nodes.Object_4.geometry} material={materials.material_0}>
        <meshPhongMaterial color={theme.color.primary} />
      </mesh>
      <mesh geometry={nodes.Object_5.geometry} material={materials.material_0}>
        <meshPhongMaterial color={theme.color.primary} />
      </mesh>
    </group>
  )
}
