import React, { useRef } from 'react'
import { Global, ThemeProvider } from '@emotion/react'
import { Header, Layout } from './components/layout'
import { About, Contact, Home, Project } from './pages'
import { global } from './styles/Global'
import theme from './styles/theme'
import ReactGA from 'react-ga4'

import Cursor from './components/cursor'

const TRACKING_ID = `${process.env.REACT_APP_GOOGLE_ANALYTICS_TRACKING_ID}`
ReactGA.initialize(TRACKING_ID)
ReactGA.send('pageview')

function App() {
  const homeRef = useRef<HTMLElement>(null)
  const aboutRef = useRef<HTMLElement>(null)
  const projectRef = useRef<HTMLElement>(null)
  const contactRef = useRef<HTMLElement>(null)

  const refs = [
    { section: 'D', ref: homeRef },
    {
      section: 'About',
      ref: aboutRef,
    },
    { section: 'Project', ref: projectRef },
    {
      section: 'Contact',
      ref: contactRef,
    },
  ]
  return (
    <ThemeProvider theme={theme}>
      <Global styles={global} />
      <Cursor />
      <Layout>
        <Header refs={refs} />
        <Home propRef={homeRef} />
        <About propRef={aboutRef} />
        <Project propRef={projectRef} />
        <Contact propRef={contactRef} />
      </Layout>
    </ThemeProvider>
  )
}

export default App
