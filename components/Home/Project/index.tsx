import PROJECT from '@/constants/PROJECT'
import cx from 'classnames'
import ProjectItem from './ProjectItem'
import styles from './project.module.scss'

function ProjectContainer() {
  return (
    <div className={cx(styles.ProjectContainer)}>
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
    </div>
  )
}

export default ProjectContainer
