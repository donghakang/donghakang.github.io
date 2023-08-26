import React from 'react'
import * as Styled from './style'
interface LinkInterface {
  href: string
  title?: string
  icon?: React.ReactNode
}

export const CarouselButton: React.FC<LinkInterface> = ({ href }) => {
  return (
    <Styled.CarouselButton className="email-container" href={href}>
      <h2 className="email">TALK TO ME, EMAIL ME,&nbsp;</h2>
      <h2 className="email">TALK TO ME, EMAIL ME,&nbsp;</h2>
    </Styled.CarouselButton>
  )
}

export const LinkButton: React.FC<LinkInterface> = ({ href, title, icon }) => {
  return (
    <Styled.LinkButton href={href}>
      <>
        {title}&nbsp;
        {icon}
      </>
    </Styled.LinkButton>
  )
}
