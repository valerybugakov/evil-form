import React from 'react'
import { Field } from 'redux-form'
import styled from 'styled-components'
import { capitalize } from 'lodash'
import { SortableElement } from 'react-sortable-hoc'
import { compose, withHandlers, lifecycle } from 'recompose'
import { injectBuilderValues } from 'redux/utils'
import { COLORS } from 'styles'
import Icon from 'components/shared/Icon'
import Textinput from 'components/shared/Textinput'
import Checkbox from 'components/shared/Checkbox'
import * as choices from './Choices'
import TitleInput from './TitleInput'

const TableRow = styled.tr`
  vertical-align: top;
`
const TableCell = styled.td`
  padding-bottom: 20.3px;
  font-size: 10px;
`
const DragIcon = styled(Icon)`
  display: block;
  width: 26px;
  margin-top: -4px;
`
const RequiredField = styled(Field)`
  margin-top: 1px;
`
const DeleteButton = styled.button`
  width: 39px;
  border: none;
  padding: 0;
  color: ${COLORS.REMOVE};
  cursor: pointer;

  &:hover {
    color: #ff5e7a;
  }
`

const FieldEditor = ({
  className,
  input,
  fieldType,
  handleRemoveClick,
}) => {
  console.log('delete me')
  const Choices = choices[capitalize(fieldType)]

  return (
    <TableRow className={className}>
      <TableCell>
        <DragIcon
          width="12"
          height="24"
          name="draggable"
          className="draggable"
        />
      </TableCell>
      <TableCell>
        <TitleInput
          inputPath={input}
          component={Textinput}
          name={`${input}.title`}
        />
      </TableCell>
      <TableCell>
        {Choices ? <Choices /> : fieldType}
      </TableCell>
      <TableCell>
        <RequiredField
          type="checkbox"
          component={Checkbox}
          name={`${input}.required`}
        />
      </TableCell>
      <TableCell>
        <DeleteButton onClick={handleRemoveClick}>
          Remove
        </DeleteButton>
      </TableCell>
    </TableRow>
  )
}

export default compose(
  lifecycle({
    shouldComponentUpdate() { return false },
  }),
  withHandlers({
    handleRemoveClick: ({ fields, index }) => _ => fields.remove(index),
  }),
  injectBuilderValues(({ input }) => ({
    fieldType: `${input}.type`,
  })),
  SortableElement,
)(FieldEditor)
