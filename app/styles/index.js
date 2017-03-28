import { keyframes } from 'styled-components'

export * from './theme'

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
