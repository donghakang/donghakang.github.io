import React from "react";
import { useCylinder } from "@react-three/cannon";
import Headphone from "../material/Headphone";

import { ObjectProps } from "./Cannon";


const HeadphoneRef = (props) => {
  const args = [1.7, 1.7, 1, 16];
  const [headphoneRef] = useCylinder(() => ({
    mass: 1,
    type: "Dynamic",
    args: args,
    ...props,
  }));

  return <Headphone ref={headphoneRef} color={props.color} />;
};

export default HeadphoneRef;
