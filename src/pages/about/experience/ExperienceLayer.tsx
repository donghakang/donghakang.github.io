import React, { useState } from "react";
import ExperienceContent from "./ExperienceContent";
import ExperienceTab from "./ExperienceTab";
import aboutData from "../../../data/aboutData.json";
import * as Styled from "./style/ExperienceLayer.styled";

function ExperienceLayer() {
  const [timepage, setTimepage] = useState<number>(0);
  const [tabChange, setTabChange] = useState<boolean>(false);

  return (
    <Styled.ExperienceLayer>
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
    </Styled.ExperienceLayer>
  );
}

export default ExperienceLayer;
