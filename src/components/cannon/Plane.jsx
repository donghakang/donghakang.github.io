import { usePlane } from "@react-three/cannon";
import React from "react";
import { ObjectProps } from "./Cannon";

const Plane = (props) => {
  const { color } = props;
  const [ref] = usePlane(() => ({ ...props }));
  return (
    <mesh ref={ref}>
      <planeBufferGeometry args={[100, 100]} />
      <meshBasicMaterial color={color} />
    </mesh>
  );
};

export default Plane;
