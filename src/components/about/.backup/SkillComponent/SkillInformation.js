import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const IntroductionAnimationDiv = styled.div`
  margin-left: 12px;
  height: 50px;
  overflow: hidden;
  color: lightgreen;

  .animated-text-desc {
    height: 100px;
    transform: translateY(40px);
    animation: slide 10s ease-in-out infinite;
  }

  @keyframes slide {
    0% {
      transform: translateY(0px);
    }
    16% {
      transform: translateY(-100px);
    }
    33% {
      transform: translateY(-100px);
    }
    49% {
      transform: translateY(-200px);
    }
    66% {
      transform: translateY(-200px);
    }
    82% {
      transform: translateY(-300px);
    }
    100% {
      transform: translateY(-300px);
    }
  }
`;

const SkillInformationDiv = styled.div`


  .skill-information-title {
    display: flex;
    color: lightgreen;
  }

  .skill-content {
    margin: 40px 0px 20px 0;
  }

  .skill-content h2 {
    font-size: 28px;
    color: lightgreen;
  }

  .skill-content ul {
    columns: 2;
    padding: 8px;
  }
  .skill-content ul li {
    font-size: 14px;
  }
`;

const IntroductionAnimation = (props) => {
  const { t, i18n } = useTranslation(["home"]);
  return (
    <IntroductionAnimationDiv>
      <div className="animated-text-desc">👨🏻‍💻 {t("home:status.1")}</div>
      <div className="animated-text-desc">🧑🏻‍🎨 {t("home:status.2")}</div>
      <div className="animated-text-desc">👨🏻‍🔬 {t("home:status.3")}</div>
      <div className="animated-text-desc">👨🏻‍💻 {t("home:status.1")}</div>
    </IntroductionAnimationDiv>
  );
};

function SkillInformation(props) {
  return (
    <SkillInformationDiv>
      <h1 className="skill-information-title">
        나는야 <IntroductionAnimation />
      </h1>
      <div className="skill-content">
        <h2>Familiar with...</h2>
        <ul>
          <li>Web/App Development</li>
          <li>Software Development</li>
          <li>User Interface and Design</li>
        </ul>
      </div>
      <div className="skill-content">
        <h2>Exposed to...</h2>
        <ul>
          <li>Practice of Database</li>
          <li>Algorithm / Data Structure</li>
          <li>Computer Vision</li>
          <li>VR and 3D Interaction</li>
          <li>Animation, Graphics & Gaming</li>
        </ul>
      </div>
    </SkillInformationDiv>
  );
}

export default SkillInformation;
