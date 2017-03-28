import React from 'react'
import styled from 'styled-components'
import { centerContentFlex, COLORS } from 'styles'
import Tabs, { TabContent } from './MaterialTabs'
import FieldTypes from './FieldTypes'
import Description from './Description'

const tabLabels = ['Custom Fields', 'Description (Optional)']

const SidebarContainer = styled.aside`
  padding: 0;
  background: white;
  border: solid 1px ${COLORS.BORDER};
`
const Header = styled.h1`
  ${centerContentFlex}
  margin: 0;
  height: 54.3px;
  font-size: 15px;
  font-weight: normal;
  background-color: ${COLORS.BORDER};
`
const TabContainer = styled(Tabs)`
  padding-bottom: 25px;

  & > div:last-child {
    min-height: 215px;
    margin: 0 50px;
  }
`

const Sidebar = ({ className }) => (
  <SidebarContainer className={className}>
    <Header>
      San Francisco Driver Form
    </Header>
    <TabContainer labels={tabLabels}>
      <TabContent
        title="Add Custom Field"
        description="Select fields which will be added to the form."
      >
        <FieldTypes />
      </TabContent>
      <TabContent
        title="Form Description"
        description="Optional form description"
      >
        <Description />
      </TabContent>
    </TabContainer>
  </SidebarContainer>
)

export default Sidebar
