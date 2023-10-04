import React from 'react'
import TIMELINE from '@/constants/TIMELINE'
import cx from 'classnames'
import styles from './about.module.scss'

type TimeProps = {
  id: number
  title: string
  date: string
  detail: string
}

function Timeline() {
  return (
    <div className={cx(styles.timeline)}>
      <ul className={cx(styles.eventsUl)}>
        {TIMELINE.map((time: TimeProps) => (
          <li key={time.id} className={cx(styles.eventsLi)}>
            <div className={cx(styles.eventsWrapper)}>
              <h4 className={cx(styles.eventsTitle, styles.kr)}>
                {time.title}
              </h4>
              <span className={cx(styles.eventsDate)}>{time.date}</span>
            </div>
            <span className="kr">{time.detail}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Timeline
