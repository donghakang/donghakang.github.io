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
      <div className={cx(styles.projectWrapper)}>
        <div className={cx(styles.animationWrapper)}>
          <Circles.Walking color={theme.color.primary} />
        </div>
        <ul className={cx(styles.projectListWrapper)}>
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
      </div>
    </section>
  )
}

export default ProjectContainer
