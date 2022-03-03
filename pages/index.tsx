import styled from "@emotion/styled";
import type { NextPage } from "next";
import Environment from "../components/environment";
// import Head from "next/head";
// import Image from "next/image";
// import Header from "../components/header/Header";
// import styles from "../styles/Home.module.css";

const HomeView = styled.div`
  .home-container {
    pointer-events: none;

    .main-head {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) scale(1, 0.8);
      /* padding: 1rem; */

      letter-spacing: -4vw;
      font-size: 30vw;
      font-weight: 700;

      line-height: 0.7;

      color: ${({theme}) => theme.colors.main_orange};

    }

    .sub-head {
      position: absolute;
      top: 70%;
      padding: 1em;
      letter-spacing: -0.05em;

      transform: scale(1, 0.8);
      font-weight: 500;
      line-height: 1em;
      font-size: 1rem;

      color: ${({theme}) => theme.colors.main_orange};
    }
  }

  @media screen and (min-width: 768px) {
    .home-container {
      .main-head {
        /* transform: translate(-50%, -50%); */
        font-size: 12vw;
        letter-spacing: -1.75vw;

        br {
          display: none;
        }
      }
      .sub-head {
        position: absolute;
        top: 70%;
        left: 16%;
        letter-spacing: -0.05em;

        padding: 0;
      }
    }
  }
`;


const Home: NextPage = () => {
  return (
    <HomeView>
      <Environment />
      <div className="home-container">
        <div className="main-head">
          DONG
          <br />
          HA
          <br />
          KANG
        </div>

        <div className="sub-head">
          There are things that can describe myself, <br /> headphones that I
          listen, keyboards that I smash, and laptop that I abuse. <br />{" "}
          Welcome to my personal space.
        </div>
      </div>
    </HomeView>
  );
};

export default Home;
