import React from 'react'
import cx from 'classnames'
import styles from './visual.module.scss'
import Scene from '../3D/IntroductionScene'

function VisualContainer() {
  return (
    <div className={cx(styles.container)}>
      <div className={cx(styles.VisualContent)}>
        <Scene />
        <h1 className={styles.Icons}>
          DONGHA—
          <br />
          KANG
        </h1>
      </div>
    </div>
  )
}

export default VisualContainer
