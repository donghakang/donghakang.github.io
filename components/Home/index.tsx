import BasicContainer from './Basic'
import ImageContainer from './Image'
import ProjectContainer from './Project'
import TextContainer from './Text'
import VisualContainer from './Visual'
import styles from './home.module.scss'

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
