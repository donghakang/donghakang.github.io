import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const experienceStyle = css`
  padding: 1rem;
`;

// TITLE
export const titleContainerStyle = css`
  position: relative;
  z-index: 2;
`;

export const titleStyle = css`
  /* margin: auto; */
  z-index: 3;
  font-size: calc(4.25rem + 3vw);
  letter-spacing: -0.09em;

  @media only screen and (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

// DESCRIPTION
export const stickyStyle = css`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin: auto;


  @media only screen and (max-width: 768px) {
    justify-content: center;
  }
`;

export const experienceContainerStyle = styled.div`
  max-width: var(--mobile-view);
  /* padding: 1rem; */
  margin: auto;
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
    display: flex;

    h2 {
      font-size: 1.5rem;
    }

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
  }

  ${({ theme }) => theme.screen.mq.mobile} {
    margin: 0;
  }

  ${({ theme }) => theme.screen.mq.web} {
    margin: auto;
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
