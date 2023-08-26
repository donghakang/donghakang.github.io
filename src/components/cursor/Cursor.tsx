import React, { useState, useEffect } from 'react'
import * as Styled from './style'

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [hidden, setHidden] = useState(false)
  const [click, setClick] = useState(false)
  const [linkHover, setLinkHover] = useState(false)
  // const [imageLinkHover, setImageLinkHover] = useState(false);

  useEffect(() => {
    const addEventListeners = () => {
      document.addEventListener('mousemove', mMove)
      document.addEventListener('mouseenter', mEnter)
      document.addEventListener('mouseleave', mLeave)
      document.addEventListener('mousedown', mDown)
      document.addEventListener('mouseup', mUp)
    }

    const removeEventListeners = () => {
      document.removeEventListener('mousemove', mMove)
      document.removeEventListener('mouseenter', mEnter)
      document.removeEventListener('mouseleave', mLeave)
      document.removeEventListener('mousedown', mDown)
      document.removeEventListener('mouseup', mUp)
    }

    const mDown = () => {
      setClick(true)
    }

    const mUp = () => {
      setClick(false)
    }

    const mMove = (el: MouseEvent) => {
      setPosition({ x: el.clientX, y: el.clientY })
    }

    const mLeave = () => {
      setHidden(true)
    }

    const mEnter = () => {
      setHidden(false)
    }

    const addLinkEvents = () => {
      document.querySelectorAll('a').forEach((el) => {
        el.addEventListener('mouseover', () => setLinkHover(true))
        el.addEventListener('mouseout', () => setLinkHover(false))
      })
      document.querySelectorAll('button').forEach((el) => {
        el.addEventListener('mouseover', () => setLinkHover(true))
        el.addEventListener('mouseout', () => setLinkHover(false))
      })
    }

    addEventListeners()
    addLinkEvents()
    return () => removeEventListeners()
  }, [])

  return (
    <Styled.Cursor
      className={
        'cursor' +
        (hidden ? ' c-hidden ' : '') +
        (click ? ' c-click ' : '') +
        (linkHover ? ' c-hover ' : '')
      }
      style={{
        top: `${position.y}px`,
        left: `${position.x}px`,
      }}
    ></Styled.Cursor>
  )
}

export default Cursor
