import React from 'react'
import styled from 'styled-components'
import { arrayPush } from 'redux-form'
import { assemble, withHandlers } from 'reassemble'
import { dispatch } from 'redux/store'
import { COLORS } from 'styles'

const Field = styled.button`
  display: inline-block;
  width: calc(50% - 10px);
  height: 26.9px;
  margin: 0 10px 18.3px 0;
  cursor: pointer;
  font-size: 10px;
  color: ${COLORS.SECONDARY};
  background-color: #ffffff;
  border-radius: 4px;
  border: solid 1px #f2f2f2;

  &:nth-child(2n) {
    margin: 0 0 18.3px 10px;
  }

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
      dispatch(arrayPush('formBuilder', 'fields', { type }))
    ),
  })
)(FieldItem)
