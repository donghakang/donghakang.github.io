import React, { useState, useLayoutEffect, Suspense } from "react";
import Header from "../Header";

// import Introduction from "./Introduction";
import Scene from "./Scene";

import Background from "./Background";
import styled from "styled-components";
import { useSelector } from "react-redux";
import Loading from "../Loading";

const HomeDiv = styled.div`
  overflow-y: hidden;
  width: 100vw;
  height: 100vh;
`;

const Heading1 = styled.h1`
  position: absolute;
  font-size: 20vw;
  top: 50%;
  transform: translate(0, -50%);
  font-weight: 800;
`;

const Heading2 = styled.h1`
  position: absolute;
  font-size: 80vw;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: 800;
`;

function useWindowWidth() {
  const [size, setSize] = useState(false);
  useLayoutEffect(() => {
    function updateSize() {
      if (window.innerWidth > 768) {
        setSize(true);
      } else {
        setSize(false);
      }
    }
    window.addEventListener("resize", updateSize);
    updateSize();

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return size;
}

export default function Home() {
  const { theme } = useSelector((state) => state.theme);
  const windowMode = useWindowWidth();

  return (
    <Suspense fallback={<Loading theme={theme}/>}>
      <HomeDiv>
        <Header />
        {windowMode ? <Heading1>DONGHA KANG</Heading1> : <Heading2>D</Heading2>}
        <Scene />
        <Background />
      </HomeDiv>
    </Suspense>
  );
}
