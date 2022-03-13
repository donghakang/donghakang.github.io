import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const experienceStyle = css`
  margin-top: 60vh;
`;

// TITLE
export const titleContainerStyle = css`
  position: relative;
  margin: 4em 0;
  z-index: 2;
  display: flex;
`;

export const titleStyle = css`
  /* margin: auto; */
  z-index: 3;
  display: flex;
  flex-direction: column;
  padding: 0 2vw;
  font-size: calc(1.5rem + 6vw);
  letter-spacing: -0.09em;
`;

// DESCRIPTION
export const experienceContainerStyle = styled.div`
  max-width: var(--mobile-view);
  margin: 4em auto;
  padding: 1rem;
  position: relative;
  z-index: 2;

  .even-container {
    flex-direction: row-reverse;
    text-align: end;

    .sup-container {

      span:first-of-type {
        flex: 1;
      }
    }
  }
  .container {
    padding: 0 0;
    display: flex;

    h2 {
      font-size: 2em;
    }

    /* &:nth-child(2n) {
    flex-direction: row-reverse;
    text-align: end;
  } */

    .sup-container {
      display: flex;
      .sup {
        padding: 0.2em 0.6em;
        /* margin-left: 0.2em; */
        margin: 0 0.2em;
        border-radius: 30px;
        color: #fff;
        background: #ff8c00;

        font-weight: 400;
        font-size: 0.875rem;
      }
    }
  }

  .even-sup-container {
    margin-right: 0;
    margin-left: auto;
  }
`;

export const titleMotion = {
  hidden: { x: 300 },
  visible: { x: 0 },
};

export const containerMotion = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0,
      staggerChildren: 0.2,
    },
  },
};

export const supMotion = {
  hidden: { scale: 0 },
  visible: { scale: 1 },
};
