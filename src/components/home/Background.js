import React from "react";

import HeatMap from "./HeatMap";

const Background = () => {
  return (
    <>
      <HeatMap
        style={{
          position: "absolute",
          top: "95%",
          left: "95%",
          backgroundColor: "red",
          width: "200px",
          height: "100px",
          transform: 'translate(-100%, -100%)'
        }}
      />
    </>
  );
};

export default Background;
