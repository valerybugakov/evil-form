import React from 'react'
import styled from 'styled-components'
import { injectBuilderValues } from 'redux/utils'
import { COLORS } from 'styles'

const Container = styled.div`
  min-height: 36px;
  margin-bottom: 21px;
  padding-bottom: 22.9px;
  font-size: 9.9px;
  border-bottom: 1px solid ${COLORS.BORDER};
`
const Label = styled.span`
  color: ${COLORS.INACTIVE};
  margin-right: 2px;
`

const DescriptionRow = ({ description }) => (
  <Container>
    <Label>DESCRIPTION:</Label>
    {description}
  </Container>
)

export default injectBuilderValues({
  description: 'description',
})(DescriptionRow)
