import React from "react";
import Header from "../Header";
// import Introduction from "./Introduction";
import Scene from "./Scene";
import Background from "./Background";
export default function Home() {
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
        <h1
          style={{
            position: "absolute",
            fontSize: "18vw",
            top: "54%",
            transform: "translate(0,-50%)",
            fontWeight: "bold",
          }}
        >
          DONGHA KANG
        </h1>
        <Scene />
        <Background />
        {/* <Introduction /> */}
      </div>
    </div>
  );
}
