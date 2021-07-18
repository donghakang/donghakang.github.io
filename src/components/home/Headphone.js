/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useState, forwardRef } from "react";
import { useGLTF } from "@react-three/drei";

import { useSpring } from "@react-spring/core";
import { a } from "@react-spring/three";

function Model(props, ref) {
  const { nodes, materials } = useGLTF("/headphone.gltf");
  const [active, setActive] = useState(0);
  const [rotationAngle, setRotationAngle] = useState(Math.PI);

  const { rotateY } = useSpring({
    rotateY: active ? rotationAngle : Math.PI / 2 + Math.random() * Math.PI,
    config: { mass: 3, tension: 1000, friction: 50, precision: 0.0001 },
  });

  return (
    <a.mesh
      {...props}
      dispose={null}
      rotation-y={rotateY}
      ref={ref}
      geometry={nodes.Skullcandy_Crusher_M_Skullcandy_Crusher_0.geometry}
      material={materials["Material.001"]}
      scale={0.3}
      onMouseOver={() => {
        setActive(!active);
        setRotationAngle(Math.random() * Math.PI * 4 - 2 * Math.PI);
      }}
    >
      <a.meshStandardMaterial color={props.color} />
    </a.mesh>
  );
}

useGLTF.preload("/headphone.gltf");

export default forwardRef(Model);
