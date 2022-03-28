import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const descriptionStyle = css`
  /* min-height: 80vh; */
  padding: 1rem;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin: 0;
`;

// TITLE
export const titleContainerStyle = css`
  position: relative;
  z-index: 2;
`;

export const titleStyle = styled(motion.h1)`
  display: flex;
  flex-direction: column;
  margin: 0;
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

  ${({ theme }) => theme.screen.mq.mobile} {
    font-size: calc(4rem + 5vw);
  }
`;

// DESCRIPTION
export const descriptionContainerStyle = css`
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

  div:nth-of-type(1) {
    font-size: 1.75rem;
  }

  div:nth-of-type(2) {
    margin-top: 8px;
  }
  
`;
