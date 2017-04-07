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
const Header = styled.div`
  display: flex;
  align-items: center;
  min-height: 54.3px;
  margin: 0;
  padding: 18px 25px;
  text-align: center;
  background-color: ${COLORS.BORDER};
`
const SavedFormsLink = styled(Link)`
  display: block;
  width: 16px;
  height: 16px;
  border-left: 4px solid;
  border-bottom: 4px solid;
  border-color: ${COLORS.SECONDARY};
  transform: rotate(45deg);

  &:hover {
    border-color: ${COLORS.HIGHLIGHTED};
  }
`
const FormTitle = styled.h1`
  flex: 1;
  margin: 0 0 0 10px;
  padding: 0;
  font-size: 15px;
  font-weight: normal;
  word-break: break-word;
`
const TabContainer = styled(Tabs)`
  & > div:last-child {
    min-height: 215px;
    margin: 0 50px;
  }
`

const Sidebar = ({ className, formTitle = 'Form Title' }) => (
  <SidebarContainer className={className}>
    <Header>
      <SavedFormsLink to="/" />
      <FormTitle>{formTitle}</FormTitle>
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

export default injectBuilderValues({
  formTitle: 'title',
})(Sidebar)
