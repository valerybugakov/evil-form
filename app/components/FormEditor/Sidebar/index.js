import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
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
  padding-bottom: 25px;
`
const Header = styled.h1`
  min-height: 54.3px;
  margin: 0;
  padding: 18px 25px;
  text-align: center;
  font-size: 15px;
  font-weight: normal;
  word-break: break-word;
  background-color: ${COLORS.BORDER};
`
const TabContainer = styled(Tabs)`
  & > div:last-child {
    min-height: 215px;
    margin: 0 50px;
  }
`
const SavedFormsLink = styled(Link)`
  margin: 0 50px;
  font-size: 12px;
  text-decoration: none;
  text-align: center;
  color: ${COLORS.INACTIVE};

  &:hover {
    color: ${COLORS.HIGHLIGHTED};
  }
`

const Sidebar = ({ className, formTitle = 'Form Title' }) => (
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
    <SavedFormsLink to="/">Saved forms</SavedFormsLink>
  </SidebarContainer>
)

export default injectBuilderValues({
  formTitle: 'title',
})(Sidebar)
