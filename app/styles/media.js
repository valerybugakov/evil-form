import { css } from 'styled-components'
import { screenSizes } from './theme'

export const media = Object.keys(screenSizes).reduce((acc, label) => {
  const emSize = screenSizes[label] / 16

  acc[`downTo${label}`] = (...args) => css`
    @media only screen and (min-width: ${emSize}em) {
      ${css(...args)}
    }
  `

  acc[`upTo${label}`] = (...args) => css`
    @media only screen and (max-width: ${emSize}em) {
      ${css(...args)}
    }
  `
  return acc
}, {})
