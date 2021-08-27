import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { dark, light } from "../../../theme/theme";

const CanvasDiv = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  z-index: 1;

  @media only screen and (max-width: 768px) {
    width: 100%;
    height: 50vh;
    margin: 0;
    padding: 0;
    position: relative;
    z-index: 1;
  }
`;

const lang = [
  "Python",
  "Javascript",
  "Java",
  "Android",
  "Swift",
  "React",
  "Node.js",
  "Unreal Engine",
  "WebGL",
  "Html",
  "CSS",
  "C# Unity",
  "C++",
  "Linux",
  "Windows",
  "MacOS",
  "Processing",
];

// // Camera Controller
// const CameraController = () => {
//   const { camera, gl } = useThree();
//   useEffect(() => {
//     const controls = new OrbitControls(camera, gl.domElement);
//     controls.enableDamping = true;
//     controls.dampingFactor = 0.25;

//     return () => {
//       controls.dispose();
//     };
//   }, [camera, gl]);
//   return null;
// };

function fibonacciSphere(samples) {
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
const Languages = ({ theme }) => {
  const mesh = useRef();
  const fib = fibonacciSphere(lang.length);

  useFrame((state) => (mesh.current.rotation.y += 0.002));

  const textLanguages = lang.map((l, index) => (
    <mesh
      position={[fib[index][0], fib[index][1], fib[index][2]]}
      key={l}
    >
      <Html center distanceFactor={30} zIndexRange={[100, 0]}>
        <h1
          style={{
            color: theme
              ? index % 2
                ? light.skill.primary
                : light.skill.secondary
              : index % 2
              ? dark.skill.primary
              : dark.skill.secondary,
          }}
        >
          {l}
        </h1>
      </Html>
    </mesh>
  ));

  return (
    <mesh ref={mesh}>
      <mesh position={[0, 0, 0]}>{textLanguages}</mesh>
    </mesh>
  );
};

const LanguageScene = ({ theme }) => {
  return (
    <CanvasDiv>
      <Canvas
        camera={{ position: [0, 0, -40], fov: 90 }}
        style={{
          margin: "0",
          width: "100%",
          height: "100%",
        }}
      >
        {/* <CameraController /> */}
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Suspense fallback={null}>
          <Languages theme={theme} />
        </Suspense>
      </Canvas>
    </CanvasDiv>
  );
};

export default LanguageScene;
