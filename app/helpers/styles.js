import { css } from 'styled-components'

const sizes = {
  largeUp: 1200,
  mediumUp: 1024,
  smallUp: 768,
  smallOnly: 376,
}

// iterate through the sizes and create a media template
// eslint-disable-next-line
export const media = Object.keys(sizes).reduce((accumulator, label) => {
  const emSize = sizes[label] / 16

  accumulator[label] = (...args) => css`
    @media (max-width: ${emSize}em) {
      ${css(...args)}
    }
  `
  return accumulator
}, {})
