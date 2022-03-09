import { css } from "@emotion/react";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import about from "../../../data/about.json";
import * as Styled from "./style";

function Experience() {
  const { scrollY, scrollYProgress } = useViewportScroll();

  const x1 = useTransform(scrollYProgress, [0, 0.4], [300, 0]);

  return (
    <div css={Styled.experienceStyle}>
      <div css={Styled.titleContainerStyle}>
        <motion.h1 style={{ x: x1 }} css={Styled.titleStyle}>
          WHERE&nbsp;&nbsp;&nbsp;WAS&nbsp;&nbsp;&nbsp;I&nbsp;&nbsp;?
        </motion.h1>
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
