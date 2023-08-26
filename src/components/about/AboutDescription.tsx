import React from 'react'
import { FaHandSparkles } from 'react-icons/fa'
import * as Styled from './style'
interface AboutDescriptionProps {
  title: string
  children: React.ReactNode
}
const AboutDescription: React.FC<AboutDescriptionProps> = ({
  title,
  children,
}) => {
  return (
    <Styled.AboutDescription className="about-description">
      <h2 className="text-title kr">
        <FaHandSparkles className="hi-hand" />
        {title}
      </h2>
      {children}
    </Styled.AboutDescription>
  )
}

export default AboutDescription
