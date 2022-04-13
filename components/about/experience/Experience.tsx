import { motion } from "framer-motion"
import { Timeline, Tween } from "react-gsap"
import { Scene } from "react-scrollmagic"
import about from "../../../data/about.json"
import * as Styled from "./style"

function Experience() {
  return (
    <section css={Styled.experienceStyle}>
      <Scene triggerHook="onLeave" duration={1000} pin>
        {(progress: number) => (
          <div className="sticky" css={Styled.stickyStyle}>
            <Timeline totalProgress={progress} paused>
              <Tween
                wrapper={<div css={Styled.titleContainerStyle} />}
                from={{ rotateX: -90, opacity: 0.5 }}
                to={{ rotateX: 0, opacity: 1 }}
              >
                <h1 css={Styled.titleStyle}>
                  WHERE&nbsp;&nbsp;&nbsp;WAS&nbsp;&nbsp;&nbsp;I&nbsp;&nbsp;?
                </h1>
              </Tween>
              <Styled.experienceContainerStyle>
                {about
                  .sort((a, b) => b.id - a.id)
                  .map((experience: any, idx: number) => (
                    <div
                      key={experience.id}
                      className={
                        idx % 2
                          ? "even-container container"
                          : "odd-container container"
                      }
                    >
                      {idx % 2 === 0 ? (
                        <Timeline
                          target={
                            <motion.h2>
                              <motion.span>{experience.title}</motion.span>
                              <div className="sup-container">
                                {experience.skills.map((skill: string) => (
                                  <motion.span className="sup" key={skill}>
                                    {skill}
                                  </motion.span>
                                ))}
                              </div>
                            </motion.h2>
                          }
                        >
                          <Tween
                            from={{ x: -10, opacity: 0 }}
                            to={{ x: 0, opacity: 1 }}
                          />
                        </Timeline>
                      ) : (
                        <Timeline
                          target={
                            <motion.h2>
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
                          }
                        >
                          <Tween
                            from={{ x: 10, opacity: 0 }}
                            to={{ x: 0, opacity: 1 }}
                          />
                        </Timeline>
                      )}
                    </div>
                  ))}
              </Styled.experienceContainerStyle>
            </Timeline>
          </div>
        )}
      </Scene>
    </section>
  )
}

export default Experience
