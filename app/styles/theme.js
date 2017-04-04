import { css } from 'styled-components'

export const COLORS = {
  PRIMARY: '#4f4f4f',
  SECONDARY: '#7f7f7f',
  HIGHLIGHTED: '#7d88d4',
  HIGHLIGHTED_DISABLED: '#bec4ea',
  INACTIVE: '#bfbfbf',
  BORDER: '#e5e5e5',
  REMOVE: '#ff8ca0',
}

export const screenSizes = {
  Wide: 1920,
  Large: 1280,
  Medium: 1024,
  Small: 768,
  Phone: 600,
  ExtraSmall: 376,
}

export const actionButtonCSS = css`
  width: 100px;
  height: 26.9px;
  color: #bec4ea;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  font-size: 10px;
  border-radius: 4px;
  background-color: #ffffff;
  border: solid 1px #bec4ea;

  &:hover {
    color: #fff;
    border-width: 0;
    background-image: radial-gradient(
      circle at 50% 51%,
      #9aa5ec,
      ${COLORS.HIGHLIGHTED}
    );
  }
`
