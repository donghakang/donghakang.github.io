import React from 'react'
import { AnimationProps } from '../../lib/types'
import * as Styled from './style'

const RotatingCircles: React.FC<AnimationProps> = ({ size, color }) => {
  return (
    <Styled.RotatingCircles size={size} color={color}>
      <div className="rotation circle-1"></div>
      <div className="rotation circle-2"></div>
      <div className="rotation circle-3"></div>
      <div className="rotation circle-4"></div>
      <div className="rotation circle-5"></div>
      <div className="rotation circle-6"></div>
      <div className="rotation circle-7"></div>
      <div className="rotation circle-8"></div>
    </Styled.RotatingCircles>
  )
}

export default RotatingCircles
