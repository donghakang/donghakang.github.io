import * as THREE from "three"
import React, { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Html } from "@react-three/drei"
import theme from "../../../assets/theme/theme"

interface SkillSphereInterface {
  skills: {
    id: number
    title: string
    slug: string
    level: number
    data: string[]
  }[]
}

function fibonacciSphere(samples: number) {
  const points = []

  const total_radius = 25
  const phi = Math.PI * (3 - Math.sqrt(5))

  for (let i = 0; i < samples; i++) {
    const y = 1 - (i / (samples - 1)) * 2
    const radius = Math.sqrt(1 - y * y)

    const theta = phi * i

    const x = Math.cos(theta) * radius
    const z = Math.sin(theta) * radius

    points.push([x * total_radius, y * total_radius, z * total_radius * 1.25])
  }
  return points
}

// Languages that are shown
const Languages: React.FC<SkillSphereInterface> = ({ skills }) => {
  const mesh = useRef<THREE.Mesh>(null)
  const fib = fibonacciSphere(skills.length)

  function getColor(level: number) {
    switch (level) {
      case 1:
        return theme.colors.blue_1
      case 2:
        return theme.colors.blue_2
      case 3:
        return theme.colors.blue_3
      case 4:
        return theme.colors.blue_5
      case 5:
        return theme.colors.blue_6
      case 6:
        return theme.colors.blue_7
      default:
        break
    }
  }

  useFrame(() => {
    if (mesh.current !== null) {
      mesh.current.rotation.y += 0.01
      mesh.current.rotation.x += 0.01
    }
  })

  const textLanguages = skills.map((l, index) => (
    <mesh position={[fib[index][0], fib[index][1], fib[index][2]]} key={l.id}>
      <Html center distanceFactor={30} zIndexRange={[100, 0]}>
        <h3
          style={{
            color: `${getColor(l.level)}`,
            fontSize: `${l.level}rem`,
          }}
        >
          {l.title}
        </h3>
      </Html>
    </mesh>
  ))

  return <mesh ref={mesh}>{textLanguages}</mesh>
}

const SkilllSphere: React.FC<SkillSphereInterface> = ({ skills }) => {
  return (
    <Canvas
      camera={{ position: [0, 0, -40], fov: 90 }}
      style={{
        width: "100%",
        minHeight: "500px",
        height: "100%",
      }}
    >
      <ambientLight />
      <pointLight position={[10, 10, 10]} />

      <Languages skills={skills} />
      {/* <OrbitControls enableZoom={false} onClick={(e) => e.stopPropagation()} /> */}
    </Canvas>
  )
}

export default SkilllSphere
