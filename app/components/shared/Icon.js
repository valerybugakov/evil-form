/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react'

const Icon = ({ name, width, height, ...rest }) => (
  <span {...rest}>
    <svg width={width} height={height}>
      <use xlinkHref={`#${name}`} />
    </svg>
  </span>
)

export default Icon
