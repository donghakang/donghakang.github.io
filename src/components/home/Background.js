import React from "react";

import HeatMap from "./HeatMap";

const Background = () => {
  return (
    <>
      <HeatMap
        style={{
          position: "absolute",
          top: "40vh",
          left: "80vw",
          backgroundColor: "red",
          width: "200px",
          height: "200px",
        }}
      />
    </>
  );
};

export default Background;
