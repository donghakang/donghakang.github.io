// import React, { Suspense, useState, useEffect } from "react";
import React from "react";
import { useSelector } from "react-redux";
import Header from "../Header";
// import { Education, Work, Skill } from "./Info";

import Intro from "./Intro";
import "../../App.scss";

export default function About() {
  // const { language } = useSelector((state) => state.language);

  return (
    <>
      <Header />
      <div className="about">
        {/* <Suspense fallback={<div>listening..</div>}>
          <Education language={language ? "en" : "ko"} />
          <Work language={language ? "en" : "ko"} />
          <Skill />
        </Suspense> */}
        {/* <Suspense fallback={<div>Loading..</div>}>
          <Skill />
        </Suspense> */}
        <Intro />
      </div>
    </>
  );
}
