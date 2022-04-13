import { css } from "@emotion/react"
import type { NextPage } from "next"
import Environment from "../components/environment"
import theme from "../assets/theme/theme"
import { useProgress } from "@react-three/drei"
import Loader from "../components/loader"
import { motion } from "framer-motion"

const mainContainerStyle = css`
  position: relative;
  width: 100vw;
  height: 100vh;
`

const containerStyle = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const titleStyle = css`
  font-size: 30vw;
  font-family: "Inter", sans-serif;
  color: ${theme.colors.main_orange};
  font-weight: 900;
  letter-spacing: -0.09em;
  line-height: 0.725;

  @media screen and (min-width: 768px) {
    font-size: 12.5vw;
    line-height: 0;
    br {
      display: none;
    }
  }
`

const subtitleStyle = css`
  position: absolute;
  /* top: 70%;
  left: 12%; */
  /* margin-top: 40px; */
  /* padding: 1em; */
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
`

const Home: NextPage = () => {
  const { active } = useProgress()

  return (
    <>
      {!active && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          css={mainContainerStyle}
        >
          <Environment />
          <div css={containerStyle}>
            <h1 css={titleStyle}>
              DONG
              <br />
              HA
              <br />
              KANG
            </h1>

            <div css={subtitleStyle}>
              There are things that can describe myself, <br /> headphones that
              I listen, keyboards that I smash, and laptop that I abuse. <br />{" "}
              Welcome to my personal space.
            </div>
          </div>
        </motion.div>
      )}
    </>
  )
}

export default Home
