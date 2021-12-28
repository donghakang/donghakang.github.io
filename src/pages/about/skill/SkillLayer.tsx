import React, { useState } from "react";
import * as Styled from "./style/SkillLayer.styled";
import SkillScene from "./SkillScene";
import SkillContent from "./SkillContent";
import skillData from "../../../data/skillData.json";

function SkillLayer() {
  const [timepage, setTimepage] = useState<string>("Python");
  const [tabChange, setTabChange] = useState<boolean>(false);

  return (
    <Styled.SkillLayer>
      <h1 className="skill-title">
        Familiar with
      </h1>
      <div className="skill-section" style={{ display: "flex" }}>
        <SkillScene
          setTab={setTimepage}
          skills={skillData}
          tabChange={tabChange}
          setTabChange={setTabChange}
        />
        <SkillContent
          tab={timepage}
          skills={skillData}
          tabChange={tabChange}
          setTabChange={setTabChange}
        />
      </div>
    </Styled.SkillLayer>
  );
}

export default SkillLayer;
