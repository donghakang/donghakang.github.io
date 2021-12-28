import React from "react";
import { useCompoundBody } from "@react-three/cannon";
import Macbook from "../material/Macbook";
import { ObjectProps } from "./Cannon";


const MacbookRef = (props) => {
  const [macbookRef] = useCompoundBody(() => ({
    mass: 1,
    type: "Dynamic",
    ...props,
    shapes: [
      {
        type: "Box",
        position: [0, 0, 0],
        rotation: [0, 0, 0],
        args: [3, 0.1, 2.3],
      },
      {
        type: "Box",
        position: [0, 1.05, -1.6],
        rotation: [-Math.PI / 1.61, 0, 0],
        args: [3, 0.2, 2.2],
      },
    ],
  }));

  return <Macbook ref={macbookRef} scale={3} color={props.color} />;
};

export default MacbookRef;
