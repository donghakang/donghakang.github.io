import { useBox } from "@react-three/cannon";
import { ObjectInterface } from "../../@types/interface";
import { Keyboard } from "../object";

const KeyboardComponent:React.FC<ObjectInterface> = (props) => {
  const args = [5.5, 0.75, 2];
  const [keyboardRef] = useBox(() => ({
    mass: 1,
    type: "Dynamic",
    ...props,
    args: args,
  }));

  return <Keyboard ref={keyboardRef} color={props.color} />;
};

export default KeyboardComponent;
