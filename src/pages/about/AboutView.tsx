import React, { useState, useEffect } from "react";
import Header from "../../components/header";
import { Scroll } from "../../components/scroll";
import AboutParallaxView from "./AboutParallaxView";
import * as Styled from "./style/AboutView.styled";

function AboutView() {
  // const [phoneMode, setPhoneMode] = useState<boolean>(false);

  // useEffect(() => {
  //   function handleResize() {
  //     // Set window width/height to state
  //     console.log(window.innerWidth);
  //     if (window.innerWidth > 640) {
  //       setPhoneMode(false);
  //     } else {
  //       setPhoneMode(true);
  //     }
  //   }

  //   window.addEventListener("resize", handleResize);
  //   handleResize();

  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  return (
    <Styled.AboutView H1={"orange"}>
      <Header />
      <AboutParallaxView />
    </Styled.AboutView>
  );
}

export default AboutView;
