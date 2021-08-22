import React, { useState, useEffect } from "react";
import HeatMap from "./HeatMap";
import styled from "styled-components";
import { useSelector } from "react-redux";

const BackgroundDiv = styled.div`
  position: absolute; 
  top: 70%;
  right 5%;
`;

const Background = () => {
  const { screenMode } = useSelector((state) => state.screenMode);

  let canvasWidth = 0;
  let canvasHeight = 0;

  if (screenMode) {
    canvasWidth = 200;
    canvasHeight = 100;
  } else {
    canvasWidth = 100;
    canvasHeight = 50;
  }

  return (
    <BackgroundDiv>
      {screenMode ? (
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
