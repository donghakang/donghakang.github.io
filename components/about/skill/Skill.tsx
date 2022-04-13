import SkillSphere from "../object"
import * as Styled from "./style"
// import SkillScene from "./SkillScene";
import skills from "../../../data/skillData.json"
import { useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useEffect } from "react"
import { Scene } from "react-scrollmagic"
import { Timeline, Tween } from "react-gsap"

const SkillLayer = () => {
  const controls = useAnimation()
  const [, inView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    } else {
      controls.start("hidden")
    }
  }, [controls, inView])

  return (
    <section css={Styled.skillStyle}>
      <Scene triggerHook="onLeave" duration={1000} pin>
        {(progress: number) => (
          <div className="sticky" css={Styled.stickyStyle}>
            <Timeline totalProgress={progress} paused>
              <Tween
                wrapper={<div css={Styled.titleContainerStyle} />}
                from={{ rotateX: -90, opacity: 0.5 }}
                to={{ rotateX: 0, opacity: 1 }}
              >
                <h1 css={Styled.titleStyle}>MY&nbsp;&nbsp;&nbsp;SUPERPOWERS</h1>
              </Tween>
              <div css={Styled.skillContainerStyle}>
                <Timeline
                  target={
                    <div>
                      <SkillSphere skills={skills} />
                    </div>
                  }
                >
                  <Tween from={{ opacity: 0 }} to={{ opacity: 1 }} />
                </Timeline>
              </div>
            </Timeline>
          </div>
        )}
      </Scene>
    </section>
  )
}

export default SkillLayer
