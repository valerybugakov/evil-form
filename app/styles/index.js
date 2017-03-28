import { keyframes, css } from 'styled-components'
import { screenSizes } from './theme'

export const media = Object.keys(screenSizes).reduce((acc, label) => {
  const emSize = screenSizes[label] / 16

  acc[label] = (...args) => css`
    @media (max-width: ${emSize}em) {
      ${css(...args)}
    }
  `
  return acc
}, {})

export const centerContentFlex = `
  display: flex;
  align-items: center;
  justify-content: center;
`

export const growWidth = keyframes`
  from {
    width: 0%;
  }

  to {
    width: 100%;
  }
`
export * from './theme'
