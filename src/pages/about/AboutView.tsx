import React, { useState, useEffect } from "react";
import Header from "../../components/header";
import { Scroll } from "../../components/scroll";
import AboutParallaxView from "./AboutParallaxView";
import * as Styled from "./style/AboutView.styled";

function AboutView() {
  return (
    <Styled.AboutView>
      <Header />
      <AboutParallaxView />
    </Styled.AboutView>
  );
}

export default AboutView;
