import React from 'react'
import styles from './home.module.scss'
import TextContainer from './Text'
import BasicContainer from './Basic'
import ImageContainer from './Image'
import VisualContainer from './Visual'
import AboutContainer from './About'
import ProjectContainer from './Project'

function HomeContainer() {
  return (
    <main className={styles.HomeContainer}>
      {/* Text Content */}
      <ImageContainer />
      <TextContainer />
      <BasicContainer />
      <VisualContainer />
      {/* <AboutContainer /> */}
      <ProjectContainer />
    </main>
  )
}

export default HomeContainer
