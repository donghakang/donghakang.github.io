import { motion } from "framer-motion";
import styled from "styled-components";

export const DescriptionLayer = styled(motion.div)`
  /* width: 100vw; */
  min-height: 100vh;
  position: relative;
  h1 {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;

    span:nth-child(2) {
      padding-left: 10vw;
    }

    span:nth-child(3) {
      padding-left: 5vw;
    }
  }

  // description content
  .description-container {
    position: relative;
    z-index: 2;
    .description-text {
      margin: auto;
      max-width: 768px;

      div:nth-child(3) {
        margin-top: 20px;
      }

      img {
        display: flex;
      }

    }
  }

  /* .parallax-macbook {
    position: absolute;
    z-index: 0;
    width: 500px;
    min-height: 500px;
    right: 0;

    * {
      min-height: 500px;
    }
  } */

  @media screen and (min-width: 768px) {
    h1 {
    }

    .description-container {
      .description-text {
        img {
          display: none;
        }
      }

      /* .parallax-macbook {
        right: 0;
        width: 50%;
      } */
    }
  }
`;
