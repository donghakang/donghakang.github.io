import Link from 'next/link'
import React, { useState } from 'react'
import cx from 'classnames'
import styles from './layout.module.scss'

function Header() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false)

  return (
    <header>
      <div
        role="presentation"
        className={cx(styles.Menu, { [styles.Rotate]: menuOpen })}
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        <div className={cx(styles.MenuLine1, { [styles.Rotate1]: menuOpen })} />
        <div className={cx(styles.MenuLine2, { [styles.Rotate2]: menuOpen })} />
      </div>
      {/* <div className={`menu-bar ${menuOpen ? 'opened' : 'closed'}`}> */}
      <div
        className={cx(styles.Menubar, {
          [styles.opened]: menuOpen,
          [styles.closed]: !menuOpen,
        })}
      >
        <Link onClick={() => setMenuOpen(false)} href="/">
          HOME.
        </Link>
        <Link onClick={() => setMenuOpen(false)} href="/me">
          ME.
        </Link>
        <Link onClick={() => setMenuOpen(false)} href="/note">
          NOTE.
        </Link>
        <Link onClick={() => setMenuOpen(false)} href="/space">
          SPACE.
        </Link>
        {/* <Link href="/contact">CALLME.</Link> */}
        <a
          onClick={() => setMenuOpen(false)}
          href="https://www.instagram.com/donghakang"
        >
          INSTAGRAM.
        </a>
        <a
          onClick={() => setMenuOpen(false)}
          href="https://www.github.com/donghakang"
        >
          GITHUB.
        </a>
      </div>
    </header>
  )
}

export default Header
