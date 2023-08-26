import React from 'react'
import { PageProps } from '../lib/types'
import RotatingCircles from '../components/animation/RotatingCircles'
import Timeline from '../components/timeline'
import * as Styled from './style'
import AboutDescription from '../components/about/AboutDescription'

// text
import aboutKO from '../i18n/ko/about.json'
const About: React.FC<PageProps> = ({ propRef }) => {
  return (
    <Styled.About ref={propRef}>
      <div className="about-container">
        <div className="main-container">
          <div className="introduction-container">
            <div className="animation-container">
              <RotatingCircles size={200} color={'var(--primary)'} />
            </div>
            <AboutDescription title={aboutKO.title}>
              <div className="kr">{aboutKO.detail[0]}</div>
              <div className="kr">{aboutKO.detail[1]}</div>
            </AboutDescription>
          </div>
        </div>
        <Timeline content={aboutKO.timeline} />
      </div>
    </Styled.About>
  )
}

export default About
