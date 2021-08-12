import React from "react";

import HeatMap from "./HeatMap";

const Background = () => {
  return (
    <div style={{ position: "absolute", top: "60%", left: "80%" }}>
      <img
        src="./img/frame-removebg-preview.png"
        alt="qr"
        width="100px"
        height="100px"
      />
      <HeatMap
        style={{
          backgroundColor: "red",
          width: "200px",
          height: "100px",
        }}
      />
    </div>
  );
};

export default Background;
