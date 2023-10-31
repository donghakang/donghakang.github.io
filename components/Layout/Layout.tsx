import React from 'react'
import Header from './Header'
import styles from './layout.module.scss'

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div className={styles.BodyContainer}>{children}</div>
    </>
  )
}

export default Layout
