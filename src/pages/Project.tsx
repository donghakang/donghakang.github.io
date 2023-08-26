import React from 'react'
import { PageProps } from '../lib/types'
import WalkingCircles from '../components/animation/WalkingCircles'
import { ProjectItem } from '../components/project'
import * as Styled from './style'
import projectKO from '../i18n/ko/project.json'

const Project: React.FC<PageProps> = ({ propRef }) => {
  return (
    <Styled.Project ref={propRef}>
      <div className="project-container">
        <div className="animation-wrapper">
          <WalkingCircles size={200} color={'var(--primary)'} />
        </div>
        <ul className="project-list-wrapper">
          {projectKO.map((projectItem) => (
            <ProjectItem
              key={projectItem.id}
              title={projectItem.title}
              imgs={projectItem.imgs}
              date={projectItem.date}
              stack={projectItem.stack}
              description={projectItem.description}
            />
          ))}
        </ul>
      </div>
    </Styled.Project>
  )
}

export default Project
