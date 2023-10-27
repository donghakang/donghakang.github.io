import React from 'react'
import cx from 'classnames'

import styles from './circles.module.scss'
import { CirclesType } from '.'

function WalkingCircles({ color }: CirclesType) {
  return (
    <div className={cx(styles.walkingCircles)}>
      <div
        className={cx(styles.rotation, styles['circle-1'])}
        style={{ borderColor: color }}
      />
      <div
        className={cx(styles.rotation, styles['circle-2'])}
        style={{ borderColor: color }}
      />
      <div
        className={cx(styles.rotation, styles['circle-3'])}
        style={{ borderColor: color }}
      />
      <div
        className={cx(styles.rotation, styles['circle-4'])}
        style={{ borderColor: color }}
      />
      <div
        className={cx(styles.rotation, styles['circle-5'])}
        style={{ borderColor: color }}
      />
      <div
        className={cx(styles.rotation, styles['circle-6'])}
        style={{ borderColor: color }}
      />
      <div
        className={cx(styles.rotation, styles['circle-7'])}
        style={{ borderColor: color }}
      />
      <div
        className={cx(styles.rotation, styles['circle-8'])}
        style={{ borderColor: color }}
      />
    </div>
  )
}

export default WalkingCircles
