import React from 'react'
import cx from 'classnames'
import { motion } from 'framer-motion'
import styles from './text.module.scss'
import Scene from '../3D/MainScene'

function MotionText({ children }: { children: React.ReactNode }) {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.01, delay: Math.random() * 1.2 }}
    >
      {children}
    </motion.span>
  )
}

function TextContainer() {
  return (
    <div className={styles.container}>
      <Scene />
      <div className={styles.TextContent}>
        <h1 className={cx(styles.MainTitle, styles.FirstMainTitle)}>
          <MotionText>Hello, world</MotionText> —{' '}
          <MotionText>This is my world</MotionText>,{' '}
          <MotionText>Lots of things to </MotionText>
          <MotionText>describe myself.</MotionText>
        </h1>
        <h1 className={cx(styles.MainTitle, styles.SecondMainTitle)}>
          <MotionText> Frontend developer, </MotionText>
          <MotionText>Creator, </MotionText>
          <MotionText>Music collector, </MotionText>
          <MotionText>burger killer, </MotionText>
          <MotionText>Heavy Lifter</MotionText>
        </h1>
        <h1 className={cx(styles.MainTitle, styles.ThirdMainTitle)}>
          <MotionText>Based In Seoul, </MotionText>
          <MotionText>Started from </MotionText>
          <MotionText>Minneapolis </MotionText>
          <MotionText>__612</MotionText>
        </h1>
      </div>
    </div>
  )
}

export default TextContainer
