import React from 'react'
import { AnimationProps } from '../../lib/types'
import * as Styled from './style'

const Circles: React.FC<AnimationProps> = ({ color }) => {
  return (
    <Styled.Circles color={color}>
      <div className="stick one"> </div>
      <div className="stick two"> </div>
      <div className="stick three"> </div>
      <div className="stick four"> </div>
      <div className="stick five"></div>
      <div className="stick six"></div>
      <div className="stick seven"></div>
      <div className="stick eight"></div>
    </Styled.Circles>
  )
}

export default Circles
