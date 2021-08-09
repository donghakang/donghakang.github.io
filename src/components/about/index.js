import React from "react";
import Header from "../Header";
import "../../App.scss";

import Introduction from "./Introduction";
import Skill from "./Skill";
import MyTimeline from "./MyTimeline";
import Contact from "./Contact";

import { Controller, Scene } from "react-scrollmagic";
import { Timeline, Tween } from "react-gsap";
import styled from "styled-components";

const AboutDiv = styled.div`
  .panel {
    background-color: ${(props) => props.theme.background.primary};
    min-width: 100vw;
    min-height: 100vh;
  }
`;

export default function About() {
  return (
    <>
      <AboutDiv>
        <Header />
        <section>
          <Introduction />
        </section>
        <section className="panel">
          <MyTimeline />
        </section>
        <section className="panel">
          <Skill />
        </section>
        <section className="panel">
          <Contact />
        </section>
      </AboutDiv>
    </>
  );
}

// export default function About() {
//   return (
//     <>
//       <Header />
//       <section className="panel">
//         <Introduction />
//       </section>

//       <section className="panel">
//         <MyTimeline />
//       </section>

//       <section className="panel">
//         <Skill />
//       </section>

//       <section className="panel">
//         <Contact />
//       </section>
//     </>
//   );
// }
