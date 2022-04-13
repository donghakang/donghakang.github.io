import type { NextPage } from "next"
import { css } from "@emotion/react"
import { motion } from "framer-motion"
import { useTransform, useViewportScroll } from "framer-motion"
import { useState } from "react"
import { Description, Experience, Skill } from "../components/about"
import { Controller } from "react-scrollmagic"
import MeshGroup from "../components/about/object/MeshGroup"
import { useProgress } from "@react-three/drei"
import Loader from "../components/loader"

const Demo: NextPage = () => {
  const { active } = useProgress()

  const { scrollY, scrollYProgress } = useViewportScroll()
  const [y, setY] = useState(0)

  scrollY.onChange((y) => {
    setY(y)
  })

  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.4, 0.5, 0.6, 1],
    ["#ffffff", "#ffffff", "#1e90ff", "#1e90ff", "#000000"]
  )

  return (
    <>
      {!active && (
        <motion.div
          css={css`
            position: relative;
            min-height: 550vh;
          `}
          style={{ backgroundColor: backgroundColor }}
        >
          <MeshGroup y={y} />
          <Description />
          <Controller>
            <Experience />
            <Skill />
          </Controller>
        </motion.div>
      )}
    </>
  )
}

export default Demo
