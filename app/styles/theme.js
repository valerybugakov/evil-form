import { css } from 'styled-components'

export const COLORS = {
  PRIMARY: '#4f4f4f',
  SECONDARY: '#7f7f7f',
  HIGHLIGHTED: '#7d88d4',
  HIGHLIGHTED_DISABLED: '#bec4ea',
  INACTIVE: '#bfbfbf',
  BORDER: '#e5e5e5',
  REMOVE: '#ff8ca0',
  ERROR: '#de3226',
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
  width: 118px;
  padding: 8px 0;
  color: ${COLORS.HIGHLIGHTED};
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  opacity: ${props => props.disabled ? '0.5' : '1'};
  border-radius: 4px;
  border: 1px solid ${COLORS.HIGHLIGHTED};
  background: white;

  &:hover {
    color: white;
    background: ${COLORS.HIGHLIGHTED};
    box-shadow:
      2px 2px 2px 0 rgba(0, 0, 0, 0.14),
      0 3px 1px -2px rgba(0, 0, 0, 0.2),
      0 1px 5px 0 rgba(0, 0, 0, 0.12);
  }
`
