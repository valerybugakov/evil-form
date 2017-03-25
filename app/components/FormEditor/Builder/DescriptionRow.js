import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { formBuilderSelector } from 'redux/form/selectors'
import { COLORS } from 'styles'

const Container = styled.div`
  color: ${COLORS.PRIMARY};
  font-size: 9.9px;
  padding-bottom: 22.9px;
  border-bottom: 1px solid ${COLORS.BORDER};
`
const Label = styled.span`
  color: ${COLORS.INACTIVE};
  margin-right: 0.6px;
`

const DescriptionRow = ({ description }) => (
  <Container>
    <Label>DESCRIPTION:</Label>
    {description}
  </Container>
)

export default connect(state => ({
  description: formBuilderSelector(state, 'description'),
}))(DescriptionRow)
