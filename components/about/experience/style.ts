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
export const experienceContainerStyle = css`
  max-width: var(--phone-view);
  margin: 4em auto;
  position: relative;
  z-index: 2;
`;

export const experienceContent = styled.div`
  padding: 2em 0;
  h2 {
    font-size: 2em;
  }

  &:nth-child(2) {
    flex-direction: row-reverse;
    text-align: end;
  }

  sup {
    padding: 0.2em 0.6em;
    /* margin-left: 0.2em; */
    margin: 0 0.2em;
    border-radius: 30px;
    color: #fff;
    background: #ff8c00;

    font-weight: 400;
    font-size: 0.875rem;
  }
`;
