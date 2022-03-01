import React, { useState, useEffect } from "react";
import Header from "../../components/header";
import Layout from "../../components/layout";
import { Scroll } from "../../components/scroll";
import AboutParallaxView from "./AboutParallaxView";
import * as Styled from "./style";

function AboutView() {
  return (
    <Layout>
      <Styled.AboutView>
        <AboutParallaxView />
      </Styled.AboutView>
    </Layout>
  );
}

export default AboutView;
