import React from "react";
import Header from "../Header";
import "../../App.scss";

import Introduction from "./Introduction";
import Skill from "./Skill";
import Timeline from "./Timeline";
import Contact from "./Contact";

export default function About() {
  return (
    <>
      <Header />
      <div className="about">
        <section>
          <Introduction />
        </section>
        <section>
          <Timeline />
        </section>
        <section>
          <Skill />
        </section>
        <section>
          <Contact />
        </section>
      </div>
    </>
  );
}
