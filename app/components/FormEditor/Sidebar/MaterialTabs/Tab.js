import React, { Component } from 'react'
import styled from 'styled-components'
import { centerContentFlex, COLORS } from 'styles'

const StyledTab = styled.div`
  ${centerContentFlex}
  flex-grow: 1;
  flex-basis: ${props => `${100 / props.tabsNumber}%;`};
  height: 50px;
  color: ${props => props.active ? COLORS.HIGHLIGHTED : COLORS.INACTIVE};
  font-size: 9px;
  cursor: pointer;
  transition: color 250ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
  border-bottom: 1px solid ${props => props.active
    ? 'transparent'
    : COLORS.BORDER
  };

  &:hover {
    color: ${COLORS.HIGHLIGHTED};
  }
`

class TabItem extends Component {
  handleClick = _ => {
    const { index, setTab } = this.props
    setTab(index)
  }

  handleFocusKeyUp = ({ target, keyCode }) => {
    if (
      target === document.activeElement &&
      (keyCode === 32 || keyCode === 13)
    ) {
      this.handleClick()
    }
  }

  render() {
    const { tabsNumber, label, active } = this.props

    return (
      <StyledTab
        tabIndex="0"
        active={active}
        tabsNumber={tabsNumber}
        onClick={this.handleClick}
        onKeyUp={this.handleFocusKeyUp}
      >
        {label}
      </StyledTab>
    )
  }
}

export default TabItem
