import type { NextPage } from "next";
import { css } from "@emotion/react";
import { motion } from "framer-motion";
import { useTransform, useViewportScroll } from "framer-motion";
import { useState } from "react";
import { Description, Experience, Skill } from "../components/demo";
import { Controller, Scene } from "react-scrollmagic";
import { Timeline, Tween } from "react-gsap";
import Emoji from "../components/emoji";

const Demo: NextPage = () => {
  const { scrollY, scrollYProgress } = useViewportScroll();
  const [y, setY] = useState(0);

  const y1 = useTransform(scrollYProgress, [0, 0.6], ["20vh", "80vh"]);
  const y2 = useTransform(scrollYProgress, [0.4, 1], ["140vh", "220vh"]);
  const y3 = useTransform(scrollYProgress, [0.2, 0.8], ["60vh", "180vh"]);

  scrollY.onChange((y) => {
    setY(y);
  });

  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.4, 0.5, 0.6, 1],
    ["#ffffff", "#ffffff", "#1e90ff", "#1e90ff", "#000000"]
  );

  return (
    <motion.div
      css={css`
        min-height: 500vh;
      `}
      style={{ backgroundColor: backgroundColor }}
    >
      <Description />
      <Controller>
        <Experience />
        <Skill />
      </Controller>
    </motion.div>
  );
};

export default Demo;
