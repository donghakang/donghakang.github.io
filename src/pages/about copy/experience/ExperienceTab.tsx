import React, { useState } from "react";
import { theme } from "../../../assets/theme";

interface ExperienceTabProps {
  tab: number;
  timeline: { id: string; title: string; date: string }[];
  setTab: React.Dispatch<React.SetStateAction<number>>;
  tabChange: boolean;
  setTabChange: React.Dispatch<React.SetStateAction<boolean>>;
}

const ExperienceTab: React.FC<ExperienceTabProps> = ({
  tab,
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
        {timeline.map((time_content, index) =>
          timeline[tab].id === time_content.id ? (
            <li key={index}>
              <div className="time">
                <span
                  className="timepoint"
                  style={{
                    backgroundColor: theme.colors.main_orange,
                    borderColor: theme.colors.main_orange,
                  }}
                ></span>
                <span className="time-milestone"></span>
              </div>
              <div
                className="time-title"
                onClick={(e) => handleClick(e, index)}
                style={{
                  color: theme.colors.main_orange,
                }}
              >
                <div>{time_content.title}</div>
              </div>
            </li>
          ) : (
            <li key={index}>
              <div className="time">
                <span className="timepoint"></span>
                <span className="time-milestone"></span>
              </div>
              <div
                className="time-title"
                onClick={(e) => handleClick(e, index)}
              >
                <div>{time_content.title}</div>
              </div>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default ExperienceTab;
