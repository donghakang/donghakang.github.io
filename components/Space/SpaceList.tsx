import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import cx from 'classnames'
import styles from './space.module.scss'

function SpaceList() {
  return (
    <div className={cx(styles.SpaceContainer)}>
      <Link href="/">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.01, delay: Math.random() * 1 }}
        >
          MY BODY
        </motion.span>
      </Link>
    </div>
  )
}

export default SpaceList
