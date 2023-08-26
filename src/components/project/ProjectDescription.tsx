import React from 'react'
import { ProjectDescriptionProps } from './ProjectItem'
import * as Styled from './style'

const ProjectDescription: React.FC<ProjectDescriptionProps> = ({
  main,
  detail,
}) => {
  return (
    <Styled.ProjectDescription>
      {main &&
        main.map((mainDescription: string, idx: number) => (
          <div key={idx} className="kr">
            {mainDescription}
          </div>
        ))}
      <br />
      <ul className="kr">
        {detail?.map((content: string, idx: number) => (
          <li key={idx} className="kr">
            {content}
          </li>
        ))}
      </ul>
    </Styled.ProjectDescription>
  )
}

export default ProjectDescription
