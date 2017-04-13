import React from 'react'
import styled from 'styled-components'
import { COLORS } from 'styles'
import FieldTypes from './FieldTypes'
import SaveButton from './SaveButton'
import RemoveFieldsButton from './RemoveFieldsButton'

const SidebarContainer = styled.aside`
  padding: 0 25px;
  background: white;
  border: solid 1px ${COLORS.BORDER};
  padding-bottom: 25px;
`
const Relative = styled.div`
  position: relative;
`
const Title = styled.h3`
  color: ${COLORS.SECONDARY};
  font-size: 16px;
  font-weight: normal;
`

const Sidebar = ({ className }) => (
  <SidebarContainer className={className}>
    <Relative>
      <SaveButton />
      <Title>Pick a question type:</Title>
      <FieldTypes />
      <RemoveFieldsButton />
    </Relative>
  </SidebarContainer>
)

export default Sidebar
