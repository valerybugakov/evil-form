import { injectGlobal } from 'styled-components'
import { COLORS } from './theme'

/* eslint no-unused-expressions: 0, max-len: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  }

  a {
    text-decoration: none;
  }

  input::placeholder {
    color: ${COLORS.INACTIVE};
  }

  #app {
    min-height: 100%;
    min-width: 100%;
    font-size: 16px;
    color: ${COLORS.PRIMARY};
    background-color: #f1f3f6;
  }
`

export * from './theme'
