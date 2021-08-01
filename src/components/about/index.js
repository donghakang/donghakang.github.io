import React from "react";
import Header from "../Header";
import "../../App.scss";

import Intro from "./Intro";
import Skill from "./Skill";
import Work from "./Work";
export default function About() {
  return (
    <>
      <Header />
      <div className="about">
        <section style={{ backgroundColor: "green" }}>
          <Intro />
        </section>
        <section style={{ backgroundColor: "hotpink" }}>
          <Work />
        </section>
        <section style={{ backgroundColor: "pink" }}>
          <Skill />
        </section>
        <section style={{ backgroundColor: "blue" }}>Contact Me</section>
      </div>
    </>
  );
}
