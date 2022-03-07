import * as THREE from "three";
import React, { Suspense, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html, OrbitControls } from "@react-three/drei";

interface SkillSphereInterface {
  skills: {
    id: number;
    title: string;
    slug: string;
    level: number;
    data: string[];
  }[];
}

function fibonacciSphere(samples: number) {
  let points = [];

  let phi = Math.PI * (3 - Math.sqrt(5));

  for (let i = 0; i < samples; i++) {
    let y = 1 - (i / (samples - 1)) * 2;
    let radius = Math.sqrt(1 - y * y);

    let theta = phi * i;

    let x = Math.cos(theta) * radius;
    let z = Math.sin(theta) * radius;

    points.push([x * 22, y * 22, z * 22]);
  }
  return points;
}

// Languages that are shown
const Languages: React.FC<SkillSphereInterface> = ({ skills }) => {
  const mesh = useRef<THREE.Mesh>(null);
  const fib = fibonacciSphere(skills.length);

  useFrame((state) => {
    if (mesh.current !== null) {
      mesh.current.rotation.y += 0.002;
    }
  });

  const textLanguages = skills.map((l, index) => (
    <mesh
      position={[fib[index][0], fib[index][1], fib[index][2]]}
      key={l.id}
      onClick={(e) => console.log("click")}
    >
      <Html center distanceFactor={30} zIndexRange={[100, 0]}>
        <h3
          style={{
            color: "black",
            fontSize: `${l.level * 1.1}em`,
          }}
        >
          {l.title}
        </h3>
      </Html>
    </mesh>
  ));

  return <mesh ref={mesh}>{textLanguages}</mesh>;
};

const SkilllSphere: React.FC<SkillSphereInterface> = ({ skills }) => {
  return (
    <Canvas
      camera={{ position: [0, 0, -40], fov: 90 }}
      style={{
        width: "100%",
        minHeight: "600px",
        height: "100%",
      }}
    >
      <ambientLight />
      <pointLight position={[10, 10, 10]} />

      <Languages skills={skills} />
      <OrbitControls enableZoom={false} onClick={(e) => e.stopPropagation()} />
    </Canvas>
  );
};

export default SkilllSphere;
