import PulmoradModal from "./PulmoradModal";

export const Pulmorad = (props) => {
  const { item } = props;
  return <PulmoradModal language={props.language} item={item} />;
};
