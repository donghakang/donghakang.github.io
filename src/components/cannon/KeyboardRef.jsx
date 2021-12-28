import React from 'react';
import { useBox } from "@react-three/cannon";
import Keyboard from "../material/Keyboard";

const KeyboardRef = (props) => {
  const args = [5.5, 0.75, 2];
  const [keyboardRef] = useBox(() => ({
    mass: 1,
    type: "Dynamic",
    ...props,
    args: args,
  }));

  return <Keyboard ref={keyboardRef} color={props.color} />;
};

export default KeyboardRef;
