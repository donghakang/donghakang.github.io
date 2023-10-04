import React from 'react'
import cx from 'classnames'
import styles from './project.module.scss'

function TechStack({ stack }: { stack: string[] }) {
  return (
    <div className={cx(styles.TechStack)}>
      {stack.map((tech: string) => (
        <div key={tech} className={cx(styles.techName)}>
          {tech}
        </div>
      ))}
    </div>
  )
}

export default TechStack
