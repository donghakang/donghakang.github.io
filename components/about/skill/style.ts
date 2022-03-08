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
`;

// DESCRIPTION
export const skillContainerStyle = css`
  margin-top: 40px;
  position: relative;
  z-index: 2;
  min-height: 800px;
`;
