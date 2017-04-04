import React, { Component } from 'react'
import styled from 'styled-components'
import { COLORS } from 'styles'
import Tab from './Tab'

const TabGroup = styled.div`
  display: flex;
  position: relative;
`
const CurrentTabIndicator = styled.div`
  position: absolute;
  left: 0;
  bottom: -1px;
  height: 2px;
  background-color: ${COLORS.HIGHLIGHTED};
  transition: all 250ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;

  ${({ tabsNumber, activeTab }) => `
    width: ${100 / tabsNumber}%;
    transform: translateX(${activeTab}00%);
  `}
`

class Tabs extends Component {
  state = {
    activeTab: this.props.selectedTab || 0,
  }

  handleTabClick = activeTab => this.setState({ activeTab })

  render() {
    const { activeTab } = this.state
    const { labels, className, children } = this.props

    return (
      <div className={className}>
        <TabGroup>
          {
            labels.map((label, index) => (
              <Tab
                key={label}
                index={index}
                label={label}
                tabsNumber={labels.length}
                setTab={this.handleTabClick}
                active={activeTab === index}
              />
            ))
          }
          <CurrentTabIndicator
            tabsNumber={labels.length}
            activeTab={activeTab}
          />
        </TabGroup>
        {
          React.Children.toArray(children)[activeTab]
        }
      </div>
    )
  }
}

export { default as TabContent } from './TabContent'
export default Tabs
