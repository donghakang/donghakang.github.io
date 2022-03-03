import { usePlane } from "@react-three/cannon";
import React from "react";
import { ObjectInterface } from "../../@types/interface";

const Plane: React.FC<ObjectInterface> = ({ rotation, position, color }) => {
  const [ref] = usePlane(() => ({ rotation: rotation, position: position }));
  return (
    <mesh ref={ref}>
      <planeBufferGeometry args={[100, 100]} />
      <meshBasicMaterial color={color} />
    </mesh>
  );
};

export default Plane;
