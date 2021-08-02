import React from "react";
import { useTranslation } from "react-i18next";

const IntroductionAnimation = (props) => {
    const { t, i18n } = useTranslation(["home"]);
    return (
      <div style={{ marginLeft: "4px" }} className="animated-text">
        <div className="animated-text-desc">👨🏻‍💻 {t("home:status.1")}</div>
        <div className="animated-text-desc">🧑🏻‍🎨 {t("home:status.2")}</div>
        <div className="animated-text-desc">👨🏻‍🔬 {t("home:status.3")}</div>
        <div className="animated-text-desc">👨🏻‍💻 {t("home:status.1")}</div>
      </div>
    );
  };
function SkillInformation() {
  return (
    <>
      <h1 style={{display: 'flex', padding: '12px'}}>
        나는야 <IntroductionAnimation/>
      </h1>
      <div>
        <h2 style={{fontFamily: 'Didot, serif', fontStyle: 'italic'}}>Familiar with...</h2>
        <ul style={{ padding: "8px", columns: "2" }}>
          <li>Web/App Development</li>
          <li>Software Development</li>
          <li>User Interface and Design</li>
        </ul>
      </div>
      <div>
        <h2 style={{fontFamily: 'Didot, serif', fontStyle: 'italic'}}>Exposed to...</h2>
        <ul style={{ padding: "8px", columns: "2" }}>
          <li>Practice of Database</li>
          <li>Algorithm / Data Structure</li>
          <li>Computer Vision</li>
          <li>VR and 3D Interaction</li>
          <li>Animation, Graphics & Gaming</li>
        </ul>
      </div>
    </>
  );
}

export default SkillInformation;
