import SkillSphere from "../object";
import * as Styled from "./style";
// import SkillScene from "./SkillScene";
import skills from "../../../data/skillData.json";
import { css } from "@emotion/react";
import {
  motion,
  useAnimation,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const SkillLayer = () => {
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
    <div css={Styled.skillStyle}>
      <div css={Styled.titleContainerStyle} ref={ref}>
        <motion.h1
          animate={controls}
          initial="hidden"
          variants={Styled.titleMotion}
          css={Styled.titleStyle}
        >
          MY&nbsp;&nbsp;&nbsp;SUPERPOWERS
        </motion.h1>
      </div>
      <div css={Styled.skillContainerStyle}>
        <SkillSphere skills={skills} />
      </div>
    </div>
  );
};

export default SkillLayer;
