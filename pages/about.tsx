import type { NextPage } from "next";
import { css } from "@emotion/react";
import { motion } from "framer-motion";
import { useTransform, useViewportScroll } from "framer-motion";
import { useState } from "react";
import { Description, Experience, Skill } from "../components/about";
import {
  KeyboardParallax,
  MacbookParallax,
  HeadphoneParallax,
} from "../components/about/object";

const About: NextPage = () => {
  const { scrollY, scrollYProgress } = useViewportScroll();
  const [y, setY] = useState(0);

  const y1 = useTransform(scrollYProgress, [0, 0.4], [100, 700]);
  const y2 = useTransform(scrollYProgress, [0.2, 0.7], [900, 1800]);
  const y3 = useTransform(scrollYProgress, [0.6, 1], [1900, 3000]);

  scrollY.onChange((y) => {
    setY(y);
  });

  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 1],
    ["#ffffff", "#1e90ff"]
  );

  return (
    <motion.div
      css={css`
        /* background-color: ${backgroundColor}; */
        position: relative;
        overflow-x: hidden;
        min-height: 300vh;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      `}
      style={{ backgroundColor: backgroundColor }}
    >
      <motion.div
        css={css`
          position: absolute;
          left: 20vw;
        `}
        style={{ y: y1 }}
      >
        <MacbookParallax
          style={{ width: "500px", height: "500px" }}
          rotation={[
            131 / (100 * Math.PI),
            y / (100 * Math.PI),
            131 / (100 * Math.PI),
          ]}
          color={"#1e90ff"}
        />
      </motion.div>
      <motion.div
        css={css`
          position: absolute;
        `}
        style={{ y: y2 }}
      >
        <HeadphoneParallax
          style={{ width: "500px", height: "500px" }}
          rotation={[
            131 / (100 * Math.PI),
            y / (100 * Math.PI),
            131 / (100 * Math.PI),
          ]}
          color={"#1e90ff"}
        />
      </motion.div>
      <motion.div
        css={css`
          left: 50vw;
          position: absolute;
        `}
        style={{ y: y3 }}
      >
        <KeyboardParallax
          style={{ width: "500px", height: "500px" }}
          rotation={[
            131 / (100 * Math.PI),
            -y / (130 * Math.PI),
            131 / (100 * Math.PI),
          ]}
          color={"#ff8800"}
        />
      </motion.div>
      <Description />
      <Experience />
      <Skill />
    </motion.div>
  );
};

export default About;
