import React, { useState, useLayoutEffect } from "react";
import Header from "../Header";
// import Introduction from "./Introduction";
import Scene from "./Scene";
import Background from "./Background";
import styled from "styled-components";

const Heading = styled.h1`
  position: absolute;
  font-size: 20vw;
  top: 54%;
  transform: translate(0, -50%);
  font-weight: 800;

  @media only screen and (max-width: 768px) {
    top: 40%;
    font-size: 80vw;
    // font-style: italic;
    font-weight: 800;
  }
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
  const windowMode = useWindowWidth();

  return (
    <div className="home">
      <Header />

      <div
        style={{
          backgroundImage: "url(IMG_1477.JPG)",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          backgroundSize: "100vw 100vh",
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Heading>{windowMode ? "DONGHA KANG" : "D"}</Heading>
        <Scene />
        <Background />
        {/* <Introduction /> */}
      </div>
    </div>
  );
}
