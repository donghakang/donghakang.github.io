import React from 'react'
import cx from 'classnames'
import Circles from '@/components/animation'
import theme from '@/styles/theme'
import PROJECT from '@/constants/PROJECT'
import styles from './project.module.scss'
import ProjectItem from './ProjectItem'

function ProjectContainer() {
  return (
    <section className={cx(styles.ProjectContainer)}>
      <ul className={cx(styles.ProjectListWrapper)}>
        {PROJECT.map((projectItem: ProjectProps) => (
          <ProjectItem
            key={projectItem.id}
            title={projectItem.title}
            images={projectItem.images}
            date={projectItem.date}
            stack={projectItem.stack}
            description={projectItem.description}
            link={projectItem.link}
          />
        ))}
      </ul>
    </section>
  )
}

export default ProjectContainer
