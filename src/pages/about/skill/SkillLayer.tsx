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
      <h2 className="title-header">My Superpower.</h2>
      <div className="skill-section">
        <SkillScene
          skills={skillData}
        />
        {/* <SkillContent
          tab={timepage}
          skills={skillData}
          tabChange={tabChange}
          setTabChange={setTabChange}
        /> */}
      </div>
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
