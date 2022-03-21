import { css } from "@emotion/react";
import { motion, useAnimation, useViewportScroll } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import about from "../../../data/about.json";
import * as Styled from "./style";

function Experience() {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <section css={Styled.experienceStyle}>
      <div css={Styled.titleContainerStyle}>
        <motion.h1
          animate={controls}
          initial="hidden"
          variants={Styled.titleMotion}
          css={Styled.titleStyle}
        >
          WHERE&nbsp;&nbsp;&nbsp;WAS&nbsp;&nbsp;&nbsp;I&nbsp;&nbsp;?
        </motion.h1>
      </div>
      <Styled.experienceContainerStyle>
        {about
          .sort((a, b) => b.id - a.id)
          .map((experience: any, idx: number) => (
            <div
              key={experience.id}
              className={idx % 2 ? "even-container container" : "odd-container container"}
            >
              {idx % 2 === 0 ? (
                <motion.h2
                  animate={controls}
                  initial="hidden"
                  variants={Styled.containerMotion}
                >
                  <motion.span>{experience.title}</motion.span>
                  <div className="sup-container">
                    {experience.skills.map((skill: string) => (
                      <motion.span
                        className="sup"
                        variants={Styled.supMotion}
                        key={skill}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.h2>
              ) : (
                <motion.h2
                  animate={controls}
                  initial="hidden"
                  variants={Styled.containerMotion}
                >
                  <motion.span>{experience.title}</motion.span>
                  <div className="sup-container">
                    <span></span>
                    {experience.skills.map((skill: string) => (
                      <motion.span
                        className="sup"
                        variants={Styled.supMotion}
                        key={skill}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.h2>
              )}
            </div>
          ))}
      </Styled.experienceContainerStyle>
      <div ref={ref}></div>
    </section>
  );
}

export default Experience;
