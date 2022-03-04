import type { NextPage } from "next";
import { css } from "@emotion/react";
import { motion } from "framer-motion";
import { useTransform, useViewportScroll } from "framer-motion";
import { useEffect, useState } from "react";
import { Description, Experience, Skill } from "../components/about";
import {
  KeyboardParallax,
  MacbookParallax,
  HeadphoneParallax,
} from "../components/about/object";

const About: NextPage = () => {
  const { scrollY, scrollYProgress } = useViewportScroll();
  const [imageLoaded, setImageLoaded] = useState(false);
  const [y, setY] = useState(0);

  const y1 = useTransform(scrollY, [0, 1300], [100, 700]);
  const y2 = useTransform(scrollY, [500, 1800], [900, 1400]);
  const y3 = useTransform(scrollY, [1200, 2000], [1500, 2000]);

  scrollY.onChange((y) => {
    setY(y);
  });

  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 1],
    ["#ffffff", "#1e90ff"]
  );

  // useEffect(() => {
  //   // image --> data,
  //   // data.content.image has Image URL
  //   const loadImage = (image: string) => {
  //     return new Promise((resolve, reject) => {
  //       const loadImage = new Image();
  //       loadImage.src = image;

  //       loadImage.onload = () => {
  //         setTimeout(() => {
  //           resolve(image);
  //         }, 0);
  //       };

  //       loadImage.onerror = (err) => reject(err);
  //     });
  //   };

  //   loadImage("img/profile.png")
  //     .then((res) => setImageLoaded(true))
  //     .catch((err) => console.error("Images cannot be loaded", err));
  // }, []);

  return (
    <motion.div
      css={css`
        /* background-color: ${backgroundColor}; */
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
        `}
        style={{ x: "30vw", y: y1 }}
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
        style={{ x: "50vw", y: y2 }}
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
