import { css } from "@emotion/react";
import styled from "@emotion/styled";
import type { NextPage } from "next";
import Environment from "../components/environment";
import theme from "../assets/theme/theme";


const mainContainerStyle = css`
  width: 100vw;
  height: 100vh;
`;

const titleStyle = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: auto;
  font-size: 12vw;
  color: ${theme.colors.main_orange};
  line-height: 0.7;


  @media screen and (min-width: 768px) {
    br {
      display: none;
    }
  }
`;

const subtitleStyle = css`
  position: absolute;
  top: 70%;
  left: 12%;
  padding: 1em;
  letter-spacing: -0.05em;

  transform: scale(1, 0.8);
  font-weight: 500;
  line-height: 1em;
  font-size: 1rem;

  color: ${theme.colors.main_orange};

  @media screen and (min-width: 768px) {
    letter-spacing: -0.05em;
    padding: 0;
  }
`;

const Home: NextPage = () => {
  return (
    <div css={mainContainerStyle}>
      <Environment />
      <h1 css={titleStyle}>
        DONG
        <br />
        HA
        <br />
        KANG
      </h1>

      <div css={subtitleStyle}>
        There are things that can describe myself, <br /> headphones that I
        listen, keyboards that I smash, and laptop that I abuse. <br /> Welcome
        to my personal space.
      </div>
    </div>
  );
};

export default Home;
