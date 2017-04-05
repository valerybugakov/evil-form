import { keyframes, css } from 'styled-components'
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

export const centerContentFlex = `
  display: flex;
  align-items: center;
  justify-content: center;
`
export const buttonReset = `
  border: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
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
