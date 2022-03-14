import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const descriptionStyle = css`
  /* background-color: yellowgreen; */
`;

// TITLE
export const titleContainerStyle = css`
  position: relative;
  z-index: 2;
`;

export const titleStyle = styled(motion.h1)`
  display: flex;
  flex-direction: column;
  padding: 0 2vw;
  font-size: calc(1.5rem + 10vw);
  line-height: 0.8;
  letter-spacing: -0.09em;

  span:nth-of-type(2) {
    /* align-self: flex-end; */
  }

  span:nth-of-type(3) {
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
    align-items: center;

    span {
      margin-left: 12px;
    }
  }
  div:nth-of-type(3) {
    margin-top: 8px;
  }
`;
