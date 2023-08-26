import React from 'react'

interface ArrowProps {
  className?: string
  color: string
  width: string
  height: string
}

const Arrow: React.FC<ArrowProps> = ({ className, color, width, height }) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 20 10"
      preserveAspectRatio="none"
    >
      <line
        x1="0"
        y1="100%"
        x2="50%"
        y2="0"
        style={{ stroke: color, strokeWidth: 0.3 }}
      />
      <line
        x1="50%"
        y1="0"
        x2="100%"
        y2="100%"
        style={{ stroke: color, strokeWidth: 0.3 }}
      />
    </svg>
  )
}

export default Arrow
