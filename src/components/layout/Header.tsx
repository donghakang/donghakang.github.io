import React from 'react'
import { HeaderProps, RefsProps } from '../../lib/types'
import * as Styled from './style'

const Header: React.FC<HeaderProps> = ({ refs }) => {
  function handleClickItem(
    ref: React.RefObject<HTMLElement> | React.RefObject<HTMLDivElement>
  ) {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <Styled.Header>
      <div className="button-wrapper logo">
        <button onClick={() => handleClickItem(refs[0].ref)}>
          {refs[0].section}
        </button>
      </div>
      <ul>
        {refs.slice(1).map((item: RefsProps) => (
          <li className="button-wrapper" key={item.section}>
            <button onClick={() => handleClickItem(item.ref)}>
              {item.section}
            </button>
            <span className="break">/</span>
          </li>
        ))}
      </ul>
    </Styled.Header>
  )
}

export default Header
