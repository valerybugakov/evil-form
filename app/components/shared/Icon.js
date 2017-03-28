/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react'

const Icon = ({
  name,
  className,
  width,
  height,
  onClick,
  tabIndex,
}) => (
  <span
    onClick={onClick}
    tabIndex={tabIndex}
    className={className}
  >
    <svg width={width} height={height}>
      <use xlinkHref={`#${name}`} />
    </svg>
  </span>
)

export default Icon
