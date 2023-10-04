import React from 'react'
import cx from 'classnames'
import styles from './circles.module.scss'

export type CirclesType = {
  color: string
}

function Circles({ color }: CirclesType) {
  return (
    <div className={styles.circles}>
      <div
        className={cx(styles.stick, styles.one)}
        style={{ backgroundColor: color }}
      />
      <div
        className={cx(styles.stick, styles.two)}
        style={{ backgroundColor: color }}
      />
      <div
        className={cx(styles.stick, styles.three)}
        style={{ backgroundColor: color }}
      />
      <div
        className={cx(styles.stick, styles.four)}
        style={{ backgroundColor: color }}
      />
      <div
        className={cx(styles.stick, styles.five)}
        style={{ backgroundColor: color }}
      />
      <div
        className={cx(styles.stick, styles.six)}
        style={{ backgroundColor: color }}
      />
      <div
        className={cx(styles.stick, styles.seven)}
        style={{ backgroundColor: color }}
      />
      <div
        className={cx(styles.stick, styles.eight)}
        style={{ backgroundColor: color }}
      />
    </div>
  )
}

export default Circles
