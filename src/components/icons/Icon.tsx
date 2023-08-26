import React from 'react'
import Arrow from './Arrow'

interface IconProps {
  className?: string
  type: string
  color: string
  width: string
  height: string
}

const Icon: React.FC<IconProps> = ({
  className,
  type,
  color,
  width,
  height,
}) => {
  switch (type) {
    case 'arrow':
      return (
        <Arrow
          className={className}
          color={color}
          width={width}
          height={height}
        />
      )

    default:
      return <></>
  }
}

export default Icon
