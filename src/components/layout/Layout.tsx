import React from 'react'
import * as Styled from './style'

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <Styled.Layout>{children}</Styled.Layout>
}

export default Layout
