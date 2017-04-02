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

  #app {
    display: flex;
    flex-direction: column;
    min-height: 100%;
    min-width: 100%;
    color: ${COLORS.PRIMARY};
    background-color: #fafafa;
  }
`

export * from './theme'
