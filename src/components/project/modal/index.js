import PulmoradModal from "./PulmoradModal";
import MeronaModal from "./MeronaModal";
import OatjangModal from "./OatjangModal";
import AnimationModal from "./AnimationModal";
import ItksnapModal from "./ItksnapModal";
import FootballModal from "./FootballModal";
import VRModal from "./VRModal";
import BezierModal from "./BezierModal";

export const Pulmorad = (props) => {
  const { item } = props;
  return <PulmoradModal language={props.language} item={item} />;
};

export const Oatjang = (props) => {
  const { item } = props;
  return <OatjangModal language={props.language} item={item} />;
};

export const Merona = (props) => {
  const { item } = props;
  return <MeronaModal language={props.language} item={item} />;
};

export const Animation = (props) => {
  const { item } = props;
  return <AnimationModal language={props.language} item={item} />;
};
export const Itksnap = (props) => {
  const { item } = props;
  return <ItksnapModal language={props.language} item={item} />;
};
export const Football = (props) => {
  const { item } = props;
  return <FootballModal language={props.language} item={item} />;
};
export const VR = (props) => {
  const { item } = props;
  return <VRModal language={props.language} item={item} />;
};
export const Bezier = (props) => {
  const { item } = props;
  return <BezierModal language={props.language} item={item} />;
};
