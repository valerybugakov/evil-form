import { keyframes } from 'styled-components'

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

export * from './media'
export * from './theme'
