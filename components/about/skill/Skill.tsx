import SkillSphere from "../object";
import * as Styled from "./style";
// import SkillScene from "./SkillScene";
import skills from "../../../data/skillData.json";
import { css } from "@emotion/react";
import { motion, useTransform, useViewportScroll } from "framer-motion";

const SkillLayer = () => {
  const { scrollYProgress } = useViewportScroll();

  const x1 = useTransform(scrollYProgress, [0, 0.4], [300, 0]);
  console.log(scrollYProgress, x1);
  return (
    <div css={Styled.skillStyle}>
      <div css={Styled.titleContainerStyle}>
        <motion.h1 style={{ x: x1 }} css={Styled.titleStyle}>
          MY&nbsp;&nbsp;&nbsp;SUPERPOWER
        </motion.h1>
      </div>
      <div css={Styled.skillContainerStyle}>
        <SkillSphere skills={skills} />
      </div>
    </div>
  );
};

export default SkillLayer;
