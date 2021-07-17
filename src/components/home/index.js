import React, { useState } from "react";
import Header from "../Header";
import Introduction from "./Introduction";
import Scene from "./Scene";
export default function Home() {
  return (
    <div className="home">
      <Header />
      <div style={{ width: "100%", height: "100%", display: "flex" }}>
        <Scene />
        <Introduction />
      </div>
    </div>
  );
}
