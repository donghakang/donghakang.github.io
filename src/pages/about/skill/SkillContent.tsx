import React from "react";
import { Trail } from "../../../components/animation";

export interface SkillProps {
  skills: {
    id: number;
    title: string;
    slug?: string | undefined;
    data: string[];
  }[];
  setTab?: React.Dispatch<React.SetStateAction<string>>;
  tab?: string;
  tabChange: boolean;
  setTabChange: React.Dispatch<React.SetStateAction<boolean>>;
}

const SkillContent: React.FC<SkillProps> = ({
  tab,
  skills,
  tabChange,
  setTabChange,
}) => {
  const currentData = skills.filter((skill) => skill.title === tab)[0];

  return (
    <div className="skill-content">
      <div className="content-title">
        <Trail key={String(tabChange)}>
          <h2>{currentData.title}</h2>
          {/* <span>{currentData.date}</span> */}
        </Trail>
      </div>
      <div className="content-body">
        <ul>
          <Trail key={String(tabChange)}>
            {currentData.data.map((list, idx) => (
              <li key={idx}>{list}</li>
            ))}
          </Trail>
        </ul>
      </div>
    </div>
  );
};

export default SkillContent;
