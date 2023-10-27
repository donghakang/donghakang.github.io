import React from 'react'
import cx from 'classnames'
import styles from './project.module.scss'

function ProjectDescription({ main, detail }: ProjectDescriptionProps) {
  return (
    <div className={cx(styles.ProjectDescription)}>
      {main &&
        main.map((mainDescription: string) => (
          <div key={mainDescription} className="kr">
            {mainDescription}
          </div>
        ))}
      <br />
      <ul className="kr">
        {detail?.map((content: string) => (
          <li key={content} className="kr">
            {content}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ProjectDescription
