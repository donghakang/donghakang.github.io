import React, { useState } from "react";
import ExperienceContent from "./ExperienceContent";
import ExperienceTab from "./ExperienceTab";
import ExperienceList from './ExperienceList'
import aboutData from "../../../data/about.json";
import * as Styled from "./style";

import { Fade } from "react-awesome-reveal";

function ExperienceLayer() {
  // const [timepage, setTimepage] = useState<number>(0);
  // const [tabChange, setTabChange] = useState<boolean>(false);

  return (
    <Styled.ExperienceLayer className="layer">
      <Fade duration={1500}>
        <div className="experience-container">
          <h2>Experience</h2>
        </div>
        <div className="experience-content">
          {/* <ExperienceTab
            tab={timepage}
            setTab={setTimepage}
            timeline={aboutData}
            tabChange={tabChange}
            setTabChange={setTabChange}
          />
          <ExperienceContent
            tab={timepage}
            timeline={aboutData}
            tabChange={tabChange}
          /> */}
          <ExperienceList timeline={aboutData} />
        </div>
      </Fade>
    </Styled.ExperienceLayer>
  );
}

export default ExperienceLayer;
