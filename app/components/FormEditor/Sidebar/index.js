import React from 'react'
import styled from 'styled-components'
import { injectBuilderValues } from 'redux/utils'
import { COLORS } from 'styles'
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
  min-height: 54.3px;
  margin: 0;
  padding: 18px 25px;
  font-size: 15px;
  font-weight: normal;
  text-align: center;
  background-color: ${COLORS.BORDER};
  word-break: break-word;
`
const TabContainer = styled(Tabs)`
  padding-bottom: 25px;

  & > div:last-child {
    min-height: 215px;
    margin: 0 50px;
  }
`

const Sidebar = ({ className, formTitle }) => (
  <SidebarContainer className={className}>
    <Header>{formTitle}</Header>
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

export default injectBuilderValues({
  formTitle: 'title',
})(Sidebar)
