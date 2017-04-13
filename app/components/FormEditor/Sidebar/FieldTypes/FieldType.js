import React from 'react'
import styled from 'styled-components'
import { arrayPush } from 'redux-form'
import { compose, withHandlers } from 'recompose'
import { dispatch } from 'redux/store'
import { media, COLORS } from 'styles'

const Field = styled.button`
  width: 100%;
  margin: 0 10px 18px 0;
  padding: 8px 25px;
  cursor: pointer;
  color: ${COLORS.SECONDARY};
  background-color: #ffffff;
  border-radius: 5px;
  border: 1px solid;

  color: ${COLORS.HIGHLIGHTED};
  background-color: white;
  border-color: ${COLORS.HIGHLIGHTED};

  &:hover {
    color: white;
    background-color: ${COLORS.HIGHLIGHTED};
    border-color: ${COLORS.HIGHLIGHTED};
  }

  ${media.upToMedium`
    width: calc(50% - 10px);

    &:nth-child(2n) {
      margin: 0 0 18px 10px;
    }
  `}
`

const FieldItem = ({ label, handleClick }) => (
  <Field onClick={handleClick}>
    {label}
  </Field>
)

export default compose(
  withHandlers({
    handleClick: ({ type, hasOptions }) => _ => (
      dispatch(arrayPush('formBuilder', 'fields', {
        type,
        ...hasOptions && { options: [] },
      }))
    ),
  })
)(FieldItem)
