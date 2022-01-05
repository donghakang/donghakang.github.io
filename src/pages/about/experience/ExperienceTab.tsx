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

  function handleClick(
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) {
    e.stopPropagation();
    setActive(index);
    setTabChange(!tabChange);
    setTab(index);
  }

  return (
    <div className="timeline">
      <ul>
        <div>
          {timeline.map((time_content, index) => (
            <li key={index}>
              <div className="time">
                <span className="timepoint"></span>
                <span className="time-milestone"></span>
              </div>
              <div
                className="time-title"
                // onMouseOver={() => console.log("mouse over")}
                // onMouseOut={() => console.log("mouse out")}
                onClick={(e) => handleClick(e, index)}
              >
                <div>{time_content.title}</div>
              </div>
            </li>
          ))}
        </div>
      </ul>
    </div>
  );
};

export default ExperienceTab;
