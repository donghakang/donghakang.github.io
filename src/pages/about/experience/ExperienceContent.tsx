import React from "react";
import { Trail } from "../../../components/animation";

interface ExperienceContentProps {
  timeline: { id: string; title: string; date: string }[];
  tab: number;
  tabChange: boolean;
  setTabChange: React.Dispatch<React.SetStateAction<boolean>>;
}

const ExperienceContent: React.FC<ExperienceContentProps> = ({
  timeline,
  tab,
  tabChange,
  setTabChange,
}) => {
  const currentData = timeline[tab];

  return (
    <div className="content">
      <div className="content-title">
        <Trail key={String(tabChange)}>
          <h2>{currentData.title}</h2>
          <span>{currentData.date}</span>
        </Trail>
      </div>
      <div className="content-body">
        <ul>
          <Trail key={String(tabChange)}>
            <li>Major in computer Science</li>
            <li>Major in computer Science</li>
            <li>Major in computer Science</li>
            <li>Major in computer Science</li>
          </Trail>
        </ul>
      </div>
    </div>
  );
};

export default ExperienceContent;
