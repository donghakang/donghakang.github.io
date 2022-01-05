import Header from "../../components/header";
import { Scroll } from "../../components/scroll";
import AboutParallaxView from "./AboutParallaxView";
import * as Styled from "./style/AboutView.styled";

function AboutView() {
  return (
    <Styled.AboutView H1={"orange"}>
      <Header />
      <AboutParallaxView />
    </Styled.AboutView>
  );
}

export default AboutView;
