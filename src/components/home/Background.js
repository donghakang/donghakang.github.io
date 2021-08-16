import React, { useState, useEffect } from "react";
import HeatMap from "./HeatMap";
import styled from "styled-components";

const BackgroundDiv = styled.div`
  position: absolute; 
  top: 70%;
  right 5%;
`;

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({ windowX: window.innerWidth, windowY: window.innerHeight });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        windowX: window.innerWidth,
        windowY: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowSize;
};

const Background = () => {
  const { windowX, windowY } = useWindowSize();

  let canvasWidth = 0;
  let canvasHeight = 0;

  if (windowX > 768) {
    canvasWidth = 200;
    canvasHeight = 100;
  } else {
    canvasWidth = 100;
    canvasHeight = 50;
  }

  console.log(windowX);
  return (
    <BackgroundDiv>
      {windowX > 768 ? (
        <img
          src="./img/frame-removebg-preview.png"
          alt="qr"
          width="100px"
          height="100px"
        />
      ) : (
        <></>
      )}

      <HeatMap
        className="heat-map"
        style={{
          width: `${canvasWidth}px`,
          height: `${canvasHeight}px`,
        }}
      />
    </BackgroundDiv>
  );
};

export default Background;
