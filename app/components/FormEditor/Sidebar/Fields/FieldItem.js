import React from 'react'
import styled from 'styled-components'
import { arrayPush } from 'redux-form'
import { assemble, withHandlers } from 'reassemble'
import { dispatch } from 'redux/store'
import { centerContentFlex, COLORS } from 'styles'

const Field = styled.div`
  ${centerContentFlex}
  flex-basis: calc(50% - 10px);
  height: 26.9px;
  margin-bottom: 18.3px;
  font-size: 10px;
  color: ${COLORS.SECONDARY};
  background-color: #ffffff;
  border-radius: 4px;
  border: solid 1px #f2f2f2;
  cursor: pointer;

  &:hover {
    color: ${COLORS.HIGHLIGHTED};
    border-color: ${COLORS.HIGHLIGHTED};
  }
`

const FieldItem = ({ label, handleClick }) => (
  <Field onClick={handleClick}>
    {label}
  </Field>
)

export default assemble(
  withHandlers({
    handleClick: ({ type }) => _ => (
      dispatch(arrayPush('formBuilder', 'fields', type))
    ),
  })
)(FieldItem)
