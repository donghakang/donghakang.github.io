import * as THREE from "three";

import React, { useRef, useState } from "react";
import { useFrame } from "react-three-fiber";
import { useSpring, animated } from "react-spring";
import { useGLTF, Html } from "@react-three/drei";

import "../../App.scss";

function Statue(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/statue.gltf");

  const [active, setHover] = useState(false);
  const animate = useSpring({ opacity: active ? 1 : 0 });

  const vec = new THREE.Vector3(2, 2, 2);
  const vec_origin = new THREE.Vector3(1, 1, 1);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    group.current.rotation.y += 0.005;
    group.current.rotation.z = 0.05 * Math.sin(time); // Back and forth animation
    if (active) {
      group.current.scale.lerp(vec, 0.1);
    } else {
      group.current.scale.lerp(vec_origin, 0.1);
    }
  });

  return (
    <group position={[-15, 0, 0]}>
      <group ref={group} {...props} dispose={null}>
        <group
          position={[4.6, 6.8, -8.4]}
          rotation={[Math.PI / 2, -Math.PI / 2, Math.PI / 8]}
        >
          <group
            onPointerDown={(e) => {
              window.appHistory.push("/about");
            }}
            onPointerOver={(event) => setHover(true)}
            onPointerOut={(event) => setHover(false)}
          >
            <mesh
              position={[10, 6.5, 5]}
              rotation={[0, 0, -Math.PI / 8]}
              scale={[20, 10, 10]}
            >
              <boxBufferGeometry position={[0, 0, 0]} />
              <meshStandardMaterial transparent={true} opacity={0.0} />
            </mesh>
          </group>
          <mesh
            castShadow
            material={materials.material_0}
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
            castShadow
            material={materials.material_0}
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
            castShadow
            material={materials.material_0}
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
            castShadow
            material={materials.material_0}
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
            castShadow
            material={materials.material_0}
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
            castShadow
            material={materials.material_0}
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
            castShadow
            material={materials.material_0}
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
            castShadow
            material={materials.material_0}
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
            castShadow
            material={materials.material_0}
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
            castShadow
            material={materials.material_0}
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
            castShadow
            material={materials.material_0}
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
          ABOUT ME
        </animated.div>
      </Html>
    </group>
  );
}


export default Statue;