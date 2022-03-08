import { css } from "@emotion/react";
import about from "../../../data/about.json";
import * as Styled from "./style";

function Experience() {
  return (
    <div css={Styled.experienceStyle}>
      <div css={Styled.titleContainerStyle}>
        <h1 css={Styled.titleStyle}>
          WHERE&nbsp;&nbsp;&nbsp;WAS&nbsp;&nbsp;&nbsp;I&nbsp;&nbsp;?
        </h1>
        <img
          src="/img/memoji.png"
          css={css`
            position: absolute;
            width: 200px;
            left: 4em;
            z-index: 5;
          `}
        />
      </div>
      <div css={Styled.experienceContainerStyle}>
        {about.map((experience: any, idx: number) => (
          <Styled.experienceContent key={experience.id}>
            {idx % 2 === 0 ? (
              <h2>
                {experience.title}
                {experience.skills.map((skill: string) => (
                  <sup key={skill}>{skill}</sup>
                ))}
              </h2>
            ) : (
              <h2>
                {experience.skills.map((skill: string) => (
                  <sup key={skill}>{skill}</sup>
                ))}
                {experience.title}
              </h2>
            )}
          </Styled.experienceContent>
        ))}
      </div>
    </div>
  );
}

export default Experience;
