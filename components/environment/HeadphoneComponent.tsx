import React from "react";
import { useCylinder } from "@react-three/cannon";
import { ObjectInterface } from "../../@types/interface";
import { Headphone } from "../object";

const HeadphoneComponent: React.FC<ObjectInterface> = (props) => {
  const args = [1.7, 1.7, 1, 16];
  const [headphoneRef] = useCylinder(() => ({
    mass: 1,
    type: "Dynamic",
    args: args,
    ...props,
  }));

  return <Headphone ref={headphoneRef} color={props.color} />;
};

export default HeadphoneComponent;
