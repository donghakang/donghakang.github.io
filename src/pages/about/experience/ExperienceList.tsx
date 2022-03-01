import React from "react";

interface ExperienceListProps {
  timeline: { id: string; title: string; date: string; content: string[] }[];
}

const ExperienceList: React.FC<ExperienceListProps> = ({ timeline }) => {
  return (
    <>
      {timeline.map((experience) => (
        <div key={experience.id}>
          <h3>{experience.title}</h3>
          <span>{experience.date}</span>
          <ul>
            {experience.content.map((content) => (
              <li>{content}</li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default ExperienceList;
