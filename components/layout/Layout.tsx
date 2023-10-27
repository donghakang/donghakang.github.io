import React from 'react'
import Header from './Header'

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

export default Layout
