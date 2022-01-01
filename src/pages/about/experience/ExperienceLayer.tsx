import React, { useState } from "react";
import ExperienceContent from "./ExperienceContent";
import ExperienceTab from "./ExperienceTab";
import aboutData from "../../../data/aboutData.json";
import * as Styled from "./style/ExperienceLayer.styled";

function ExperienceLayer() {
  const [timepage, setTimepage] = useState<number>(0);
  const [tabChange, setTabChange] = useState<boolean>(false);

  return (
    <Styled.ExperienceLayer className="layer">
      <div className="experience-container">
        <h1>Experience</h1>
      </div>
      <div className="experience-content">
        <ExperienceTab
          setTab={setTimepage}
          timeline={aboutData}
          tabChange={tabChange}
          setTabChange={setTabChange}
        />
        <ExperienceContent
          tab={timepage}
          timeline={aboutData}
          tabChange={tabChange}
          setTabChange={setTabChange}
        />
      </div>

      {/* <div className="experience-container">
        <ExperienceTab
          setTab={setTimepage}
          timeline={aboutData}
          tabChange={tabChange}
          setTabChange={setTabChange}
        />
        <ExperienceContent
          tab={timepage}
          timeline={aboutData}
          tabChange={tabChange}
          setTabChange={setTabChange}
        />
      </div> */}
    </Styled.ExperienceLayer>
  );
}

export default ExperienceLayer;
