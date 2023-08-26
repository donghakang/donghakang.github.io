import React from 'react'
import Icon from '../icons'
import * as Styled from './style'

interface ScrollToTopProps {
  handleClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const ScrollToTop: React.FC<ScrollToTopProps> = ({ handleClick }) => {
  return (
    <Styled.ScrollToTop onClick={handleClick}>
      <div className="arrow-wrapper">
        <Icon
          className="arrow-icon icon-1"
          type={'arrow'}
          color={'#bfff00'}
          width={'100%'}
          height={'30px'}
        />
        <Icon
          className="arrow-icon icon-2"
          type={'arrow'}
          color={'#bfff00'}
          width={'100%'}
          height={'30px'}
        />
        <Icon
          className="arrow-icon icon-3"
          type={'arrow'}
          color={'#bfff00'}
          width={'100%'}
          height={'30px'}
        />
      </div>
      <span>scroll to top</span>
    </Styled.ScrollToTop>
  )
}

export default ScrollToTop
