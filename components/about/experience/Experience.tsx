import about from "../../../data/about.json";
import * as Styled from "./style";

function Experience() {
  return (
    <div css={Styled.experienceStyle}>
      <div css={Styled.titleContainerStyle}>
        <h2 css={Styled.titleStyle}>Experience</h2>
      </div>
      <div css={Styled.experienceContainerStyle}>
        {about.map((experience) => (
          <div className="experience-content" key={experience.id}>
            <h3 className="experience-title">{experience.title}</h3>
            <ul>
              {experience.content.map((content, idx) => (
                <li key={idx}>{content}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
