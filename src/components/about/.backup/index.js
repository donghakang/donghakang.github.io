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
  #pinContainer {
    width: 100vw;
    height: 100vh;
  }
  .panel {
    background-color: red;
    min-width: 100vw;
    min-height: 100vh;
    position: absolute;
  }
`;

// export default function About() {
//   return (
//     <>
//       <AboutDiv>
//         <Header />
//         <Controller>
//           <Scene triggerHook="onLeave" duration="400%" pin>
//             <Timeline wrapper={<div id="pinContainer" />}>
//               <section className="panel">
//                 <Introduction />
//               </section>
//               <Tween from={{ y: "-100vh" }} to={{ y: "0%" }}>
//                 <section>
//                   <MyTimeline />
//                 </section>
//               </Tween>
//               <Tween from={{ y: "-100%" }} to={{ y: "0%" }}>
//                 <section className="panel">
//                   <Skill />
//                 </section>
//               </Tween>
//               <Tween from={{ y: "-100%" }} to={{ y: "0%" }}>
//                 <section className="panel">
//                   <Contact />
//                 </section>
//               </Tween>
//             </Timeline>
//           </Scene>
//         </Controller>
//       </AboutDiv>
//     </>
//   );
// }

export default function About() {
  return (
    <>
      <Header />
      <section className="panel">
        <Introduction />
      </section>

      <section>
        <MyTimeline />
      </section>

      <section className="panel">
        <Skill />
      </section>

      <section className="panel">
        <Contact />
      </section>
    </>
  );
}
