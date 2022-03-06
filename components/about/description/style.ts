import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const descriptionStyle = css`
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
  font-size: 12.5vw;
  line-height: 0.8;
  letter-spacing: -0.09em;

  span:nth-child(2) {
    /* align-self: flex-end; */
  }

  span:nth-child(3) {
    align-self: flex-end;
  }
`;

// DESCRIPTION
export const descriptionContainerStyle = css`
  margin-top: 40px;
  position: relative;
  z-index: 2;
`;

export const descriptionTextStyle = styled(motion.div)`
  margin: auto;
  max-width: 768px;
  word-break: keep-all;
  .kr {
    display: flex;

    span {
      margin-left: 12px;
    }
  }
  div:nth-child(3) {
    margin-top: 8px;
  }
`;
