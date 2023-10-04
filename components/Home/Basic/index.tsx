import React from 'react'
import cx from 'classnames'
import { cousine } from '@/pages/_app'
import styles from './basic.module.scss'

function ThreeContainer() {
  return (
    <div className={cx(styles.container)}>
      <div className={cx(styles.background, styles.top)}>
        <div className={cx(styles.contactInfo)}>
          <p className={cx(cousine.className, styles.info)}>
            DONGHA KANG
            <br />
            95.06.02
            <br />
            BASED ON KOREA
            <br />
            REPRE. MN - OH
          </p>
          <p />
          <p />
          <p />
          <p />
          <p className={cx(cousine.className, styles.info2)}>
            FRONTEND DEVELOPER
            <br />
            <br />
            CREATIVE DEVELOPER
            <br />
            AGHHH....
          </p>
          <p />
        </div>
      </div>
      <div className={cx(styles.background, styles.bottom)}>
        <div className={cx(styles.scrollInfo)}>
          <p className={cx(cousine.className, styles.info)}>
            So, one thing that I always keep in mind
            <br />I should not think too much, I cannot sleep
            <br />
            Of course I want to sleep a lot <br />
            but why should I stop thinking?
          </p>
        </div>
      </div>
    </div>
  )
}

export default ThreeContainer
