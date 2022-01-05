import React, { useState } from "react";
import * as Styled from "./style/SkillLayer.styled";
import SkillScene from "./SkillScene";
import SkillContent from "./SkillContent";
import skillData from "../../../data/skillData.json";
import { IoIosArrowUp } from "react-icons/io";

const SkillLayer = ({ scrollMagic }: { scrollMagic?: () => void }) => {
  const [timepage, setTimepage] = useState<string>("Python");
  const [tabChange, setTabChange] = useState<boolean>(false);

  return (
    <Styled.SkillLayer className="layer">
      <h1 className="skill-title">Familiar with</h1>
      <div className="skill-section">
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
      {scrollMagic && (
        <div
          style={{
            zIndex: 2,
            position: "fixed",
            bottom: "10%",
            right: "5%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "25px",
            width: "50px",
            height: "50px",
            backgroundColor: "lightgreen",
            cursor: "pointer",
          }}
          onClick={scrollMagic}
        >
          <IoIosArrowUp />
        </div>
      )}
    </Styled.SkillLayer>
  );
};

export default SkillLayer;
