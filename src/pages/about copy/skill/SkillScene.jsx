import React, { Suspense, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html, OrbitControls } from "@react-three/drei";
import { theme } from "../../../assets/theme";

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
const Languages = ({ skills, setTab, setTabChange, tabChange }) => {
  // const lang = skills.map((skill) => skill.title);
  const [isRotate, setIsRotate] = useState(true);
  const [isPoint, setIsPoint] = useState("");
  const mesh = useRef();
  const fib = fibonacciSphere(skills.length);

  useFrame((state) => {
    if (isRotate) {
      mesh.current.rotation.y += 0.002;
    }
  });

  function handleClick(e, lang) {
    e.stopPropagation();
    setTabChange(!tabChange);
    setTab(lang);
  }

  const textLanguages = skills.map((l, index) => (
    <mesh
      position={[fib[index][0], fib[index][1], fib[index][2]]}
      key={l}
      onClick={(e) => console.log("click")}
    >
      <Html center distanceFactor={30} zIndexRange={[100, 0]}>
        <h1
          name={l}
          style={{
            color:
              isPoint === l
                ? theme.colors.main_orange
                : index % 2
                ? theme.colors.obj_3
                : theme.colors.main_blue,
            fontSize: isPoint === l ? "60px" : "40px",
            cursor: isRotate ? "default" : "pointer",
          }}
          onMouseOver={() => {
            setIsRotate(false);
            setIsPoint(l);
          }}
          onMouseOut={() => {
            setIsRotate(true);
            setIsPoint("");
          }}
          onClick={(e) => handleClick(e, l)}
        >
          {l}
        </h1>
      </Html>
    </mesh>
  ));

  return <mesh ref={mesh}>{textLanguages}</mesh>;
};

const SkillScene = ({ setTab, skills, tabChange, setTabChange }) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Canvas
        className="skill-canvas"
        camera={{ position: [0, 0, -40], fov: 90 }}
      >
        {/* <CameraController /> */}
        <ambientLight />
        <pointLight position={[10, 10, 10]} />

        <Languages
          skills={skills.map((skill) => skill.title)}
          setTab={setTab}
          tabChange={tabChange}
          setTabChange={setTabChange}
        />
        <OrbitControls
          enableZoom={false}
          onClick={(e) => e.stopPropagation()}
        />
      </Canvas>
    </Suspense>
  );
};

export default SkillScene;
