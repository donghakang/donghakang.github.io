import React, { useState } from "react";
import * as Styled from "./style";
import SkillScene from "./SkillScene";
import SkillContent from "./SkillContent";
import skillData from "../../../data/skillData.json";
import { IoIosArrowUp } from "react-icons/io";
import { Fade } from "react-awesome-reveal";

const SkillLayer = ({ scrollMagic }: { scrollMagic?: () => void }) => {
  const [timepage, setTimepage] = useState<string>("Python");
  const [tabChange, setTabChange] = useState<boolean>(false);

  return (
    <Styled.SkillLayer className="layer">
      <Fade duration={1500}>
        <h1 className="skill-title">Skillset</h1>
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
      </Fade>
      {scrollMagic && (
        <div
          style={{
            zIndex: 2,
            position: "fixed",
            bottom: "-15%",
            right: "calc(50% - 25px)",
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
