import { motion } from "framer-motion";
import styled from "styled-components";

export const AboutView = styled(motion.div)`
  min-height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h1 {
    font-size: 20vw;
    font-weight: 700;
    line-height: 0.875;
    letter-spacing: -8px;
  }

  h2 {
    font-size: 8vw;
    font-weight: 700;
    line-height: 0.875;
    letter-spacing: -8px;
  }




  

  .material {
    position: absolute;
  }
  @media screen and (min-width: 768px) {
    h1 {
      font-size: 12vw;
      letter-spacing: -12px;
    }
  }
`;
