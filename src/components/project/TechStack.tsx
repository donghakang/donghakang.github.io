import React from 'react'
import * as Styled from './style'

interface TechStackProps {
  stack: string[]
}
const TechStack: React.FC<TechStackProps> = ({ stack }) => {
  return (
    <Styled.TechStack>
      {stack.map((tech: string) => (
        <div key={tech} className="tech-name">
          {tech}
        </div>
      ))}
    </Styled.TechStack>
  )
}

export default TechStack
