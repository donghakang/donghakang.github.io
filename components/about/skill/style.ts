import { css } from "@emotion/react";

export const skillStyle = css`
  padding: 0 1rem;
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
  color: white; 
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
