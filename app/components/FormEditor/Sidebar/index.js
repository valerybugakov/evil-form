import React from 'react'
import styled from 'styled-components'
import { COLORS } from 'styles'
import FieldTypes from './FieldTypes'

const SidebarContainer = styled.aside`
  padding: 0 25px;
  background: white;
  border: solid 1px ${COLORS.BORDER};
  padding-bottom: 25px;
`
const Title = styled.h3`
  color: ${COLORS.SECONDARY};
  font-size: 16px;
  font-weight: normal;
`

const Sidebar = ({ className }) => (
  <SidebarContainer className={className}>
    <Title>Pick a field type:</Title>
    <FieldTypes />
  </SidebarContainer>
)

export default Sidebar
