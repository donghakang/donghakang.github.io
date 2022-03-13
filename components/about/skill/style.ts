import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const skillStyle = css`
  margin-top: 60vh;
`;

// TITLE
export const titleContainerStyle = css`
  display: flex;
  position: relative;
  z-index: 2;
`;

export const titleStyle = css`
  z-index: 2;
  display: flex;
  letter-spacing: -0.09em;
  flex-direction: column;
  padding: 0 2vw;
  font-size: calc(1.5rem + 6vw);
  color: white;
`;

// DESCRIPTION
export const skillContainerStyle = css`
  margin-top: 40px;
  margin-bottom: 0;
  position: relative;
  z-index: 2;
  /* min-height: 800px; */
`;

// ANIMATION
export const titleMotion = {
  hidden: { x: 300 },
  visible: { x: 0 },
};


export const sphereMotion = {
  hidden: { scale: 0 },
  visible: { scale: 1 },
};
