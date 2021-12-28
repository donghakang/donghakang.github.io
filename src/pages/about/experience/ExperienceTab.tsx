import React, { useState } from "react";

interface ExperienceTabProps {
  timeline: { id: string; title: string; date: string }[];
  setTab: React.Dispatch<React.SetStateAction<number>>;
  tabChange: boolean;
  setTabChange: React.Dispatch<React.SetStateAction<boolean>>;
}

const ExperienceTab: React.FC<ExperienceTabProps> = ({
  timeline,
  setTab,
  tabChange,
  setTabChange,
}) => {
  const [active, setActive] = useState(0);
  
  function handleClick(index: number) {
    setActive(index);
    setTabChange(!tabChange);
    setTab(index);
  }

  return (
    <div className="timeline">
      <ul>
        {timeline.map((time_content, index) => (
          <li key={index} style={{ display: "flex" }}>
            <div className="time">
              <span className="timepoint"></span>
              <span className="time-milestone"></span>
            </div>
            <div
              className="time-title"
              onMouseOver={() => console.log("mouse over")}
              onMouseOut={() => console.log("mouse out")}
              onClick={() => handleClick(index)}
              style={{ color: "red" }}
            >
              <div>{time_content.title}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceTab;
