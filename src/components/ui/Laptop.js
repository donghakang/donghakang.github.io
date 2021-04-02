import * as THREE from "three";

import React, { useRef, useState } from "react";
import { useFrame } from "react-three-fiber";
import { useSpring, animated } from "react-spring";
import { useGLTF, Html } from "@react-three/drei";

import "../../App.scss";

function Mac(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/laptop.gltf");

  const [active, setHover] = useState(false);
  const animate = useSpring({ opacity: active ? 1 : 0 });

  const vec = new THREE.Vector3(1.4, 1.4, 1.4);
  const vec_origin = new THREE.Vector3(1, 1, 1);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    // group.current.rotation.y -= 0.03
    // group.current.rotation.z = .25 * Math.sin(time) ;         // Back and forth animation

    group.current.rotation.y -= 0.005;
    group.current.rotation.z = 0.05 * Math.sin(time); // Back and forth animation

    if (active) {
      group.current.scale.lerp(vec, 0.1);
    } else {
      group.current.scale.lerp(vec_origin, 0.1);
    }
  });

  return (
    <group
      position={[10, 0, 0]}
      scale={[1.8, 1.8, 1.8]}
      onPointerDown={(e) => {
        window.appHistory.push("/project");
      }}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <group ref={group} {...props} dispose={null}>
        <group rotation={[-Math.PI / 2, -Math.PI / 4, 0]}>
          <mesh
            material={materials.aiStandardSurface5SG}
            geometry={nodes.mesh_0.geometry}
          >
            <meshStandardMaterial
              attach="material"
              color={new THREE.Color("#333333")}
              roughness={0.3}
              metalness={1.0}
            />
          </mesh>
          <mesh
            material={materials.aiStandardSurface1SG}
            geometry={nodes.mesh_2.geometry}
          >
            <meshStandardMaterial
              attach="material"
              color={new THREE.Color("#333333")}
              roughness={0.3}
              metalness={1.0}
            />
          </mesh>
          <mesh
            material={materials.aiStandardSurface7SG}
            geometry={nodes.mesh_1.geometry}
          >
            <meshStandardMaterial
              attach="material"
              color={new THREE.Color("#333333")}
              roughness={0.3}
              metalness={1.0}
            />
          </mesh>
          <mesh
            material={materials.aiStandardSurface3SG}
            geometry={nodes.mesh_3.geometry}
          >
            <meshStandardMaterial
              attach="material"
              color={new THREE.Color("#333333")}
              roughness={0.3}
              metalness={1.0}
            />
          </mesh>
          <mesh
            material={materials.aiStandardSurface4SG}
            geometry={nodes.mesh_4.geometry}
          >
            <meshStandardMaterial
              attach="material"
              color={new THREE.Color("#333333")}
              roughness={0.3}
              metalness={1.0}
            />
          </mesh>
          <mesh
            material={materials.aiStandardSurface4SG}
            geometry={nodes.mesh_5.geometry}
          >
            <meshStandardMaterial
              attach="material"
              color={new THREE.Color("#333333")}
              roughness={0.3}
              metalness={1.0}
            />
          </mesh>
          <mesh
            material={materials.aiStandardSurface4SG}
            geometry={nodes.mesh_6.geometry}
          >
            <meshStandardMaterial
              attach="material"
              color={new THREE.Color("#333333")}
              roughness={0.3}
              metalness={1.0}
            />
          </mesh>
          <mesh
            material={materials.aiStandardSurface6SG}
            geometry={nodes.mesh_7.geometry}
          >
            <meshStandardMaterial
              attach="material"
              color={new THREE.Color("#333333")}
              roughness={0.3}
              metalness={1.0}
            />
          </mesh>
          <mesh
            material={materials.initialShadingGroup}
            geometry={nodes.mesh_8.geometry}
          >
            <meshStandardMaterial
              attach="material"
              color={new THREE.Color("#333333")}
              roughness={0.3}
              metalness={1.0}
            />
          </mesh>
          <mesh
            material={materials.initialShadingGroup}
            geometry={nodes.mesh_9.geometry}
          >
            <meshStandardMaterial
              attach="material"
              color={new THREE.Color("#333333")}
              roughness={0.3}
              metalness={1.0}
            />
          </mesh>
          <mesh
            material={materials.initialShadingGroup}
            geometry={nodes.mesh_10.geometry}
          >
            <meshStandardMaterial
              attach="material"
              color={new THREE.Color("#333333")}
              roughness={0.3}
              metalness={1.0}
            />
          </mesh>
        </group>
      </group>
      <Html>
        <animated.div style={animate} className="content">
          PROJECT
        </animated.div>
      </Html>
    </group>
  );
}

export default Mac;
