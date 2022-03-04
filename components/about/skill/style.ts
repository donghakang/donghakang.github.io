import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const skillStyle = css`
`;

// TITLE
export const titleContainerStyle = css`
  position: relative;
  z-index: 2;
`;

export const titleStyle = styled(motion.h1)`
  margin: auto;
  display: flex;
  flex-direction: column;
  padding: 0 2vw;
`;


// DESCRIPTION
export const skillContainerStyle = css`
  margin-top: 40px;
  position: relative;
  z-index: 2;
`;
