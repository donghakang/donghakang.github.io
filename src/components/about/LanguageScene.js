import React, { useEffect, Suspense, useRef } from "react";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const lang = [
  "Python",
  "Javascript",
  "Java",
  "Android",
  "Swift",
  "React",
  "Node.js",
  "Unreal\ Engine",
  "WebGL",
  "Html",
  "CSS",
  "C#\ Unity",
  "C++",
  "Linux",
  "Windows",
  "MacOS",
  "Processing",
];

// Camera Controller
const CameraController = () => {
  const { camera, gl } = useThree();
  useEffect(() => {
    const controls = new OrbitControls(camera, gl.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;

    return () => {
      controls.dispose();
    };
  }, [camera, gl]);
  return null;
};

function fibonacciSphere(samples) {
  let points = [];

  let phi = Math.PI * (3 - Math.sqrt(5));

  for (let i = 0; i < samples; i++) {
    let y = 1 - (i / (samples - 1)) * 2;
    console.log(y);
    let radius = Math.sqrt(1 - y * y);

    let theta = phi * i;

    let x = Math.cos(theta) * radius;
    let z = Math.sin(theta) * radius;

    points.push([x * 20, y * 20, z * 20]);
  }
  return points;
}

// Languages that are shown
const Languages = () => {
  const mesh = useRef();
  const fib = fibonacciSphere(lang.length);

  useFrame((state) => (mesh.current.rotation.y += 0.002));

  const handleClick = (lang) => {
    // when language is clicked, pops out the information about the language
    // console.log('clicked ', lang)
    console.log(lang);
  };

  const textLanguages = lang.map((l, index) => (
    <mesh position={[fib[index][0], fib[index][1], fib[index][2]]} key={l}>
      <Html distanceFactor={30}>
        <h1 onClick={() => handleClick(l)}>{l}</h1>
      </Html>
    </mesh>
  ));

  return (
    <mesh ref={mesh}>
      <mesh position={[0, 0, 0]}>{textLanguages}</mesh>
    </mesh>
  );
};

const LanguageScene = (props) => {
  return (
    <Canvas
      camera={{ position: [0, 0, -20], fov: 90 }}
      style={{
        margin: "0",
        width: "100%",
        height: "50vh",
        backgroundColor: "black",
      }}
    >
      <CameraController />
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Suspense fallback={null}>
        <Languages />
      </Suspense>
    </Canvas>
  );
};

export default LanguageScene;
