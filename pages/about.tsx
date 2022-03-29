import type { NextPage } from "next";
import { css } from "@emotion/react";
import { motion } from "framer-motion";
import { useTransform, useViewportScroll } from "framer-motion";
import { useState } from "react";
import { Description, Experience, Skill } from "../components/about";
import { Controller } from "react-scrollmagic";
import MeshGroup from "../components/about/object/MeshGroup";

const Demo: NextPage = () => {
  const { scrollY, scrollYProgress } = useViewportScroll();
  const [y, setY] = useState(0);

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
        position: relative;
        min-height: 550vh;
      `}
      style={{ backgroundColor: backgroundColor }}
    >
      <MeshGroup y={y}/>
      <Description />
      <Controller>
        <Experience />
        <Skill />
      </Controller>
    </motion.div>
  );
};

export default Demo;
