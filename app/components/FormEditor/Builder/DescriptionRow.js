import React from 'react'
import { Field } from 'redux-form'
import styled, { css } from 'styled-components'
import { COLORS } from 'styles'
import Textarea from 'components/shared/Textarea'

const Container = styled.div`
  min-height: 36px;
  padding-bottom: 22.9px;
`
const Label = styled.span`
  font-size: 12px;
  margin-right: 2px;
  color: ${COLORS.INACTIVE};
`
const TextareaStyles = css`
  width: 100%;
  min-height: 90px;
  margin-top: 8px;
  color: ${COLORS.PRIMARY};
`

const DescriptionRow = () => (
  <Container>
    <Label>DESCRIPTION:</Label>
    <Field
      name="description"
      component={Textarea}
      css={TextareaStyles}
    />
  </Container>
)

export default DescriptionRow
