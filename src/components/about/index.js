import React, { useEffect } from "react";

import Header from "../Header";
import "../../App.scss";

import Introduction from "./Introduction";
import Skill from "./Skill";
import MyTimeline from "./MyTimeline";
import Contact from "./Contact";

import styled from "styled-components";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const AboutDiv = styled.div`
  // .panel {
  //   background-color: ${(props) => props.theme.background.primary};
  //   min-width: 100vw;
  //   min-height: 100vh;
  // }
`;

export default function About() {
  const { t, i18n } = useTranslation(["about"]);
  const { language } = useSelector((state) => state.language);

  useEffect(() => {
    function handleChangeLanguage() {
      i18n.changeLanguage(language ? "en" : "ko");
    }
    handleChangeLanguage();
  }, [language]);

  return (
    <>
      <AboutDiv>
        <Header />
        <section>
          <Introduction t={t} />
        </section>
        {/* <section className="panel">
          <MyTimeline t={t} />
        </section> */}
        <section className="panel">
          <Skill t={t} />
        </section>
        <section className="panel">
          <Contact t={t} />
        </section>
      </AboutDiv>
    </>
  );
}
