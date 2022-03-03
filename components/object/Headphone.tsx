/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { useGLTF } from "@react-three/drei";
import { MeshProps } from "@react-three/fiber";
import { forwardRef } from "react";
import { ObjectInterface } from "../../@types/interface";

const Model = forwardRef<ObjectInterface, MeshProps>((props, ref) => {
  const { nodes, materials } = useGLTF("obj/headphone.gltf");

  return (
    <mesh
      ref={ref}
      dispose={null}
      geometry={nodes.Skullcandy_Crusher_M_Skullcandy_Crusher_0.geometry}
      material={materials["Material.001"]}
      scale={0.3}
    >
      <meshPhongMaterial color={props.color} />
    </mesh>
  );
});

useGLTF.preload("obj/headphone.gltf");

export default Model;
