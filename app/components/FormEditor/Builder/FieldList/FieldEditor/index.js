import React from 'react'
import { Field } from 'redux-form'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { compose, withHandlers, lifecycle } from 'recompose'
import { SortableElement } from 'react-sortable-hoc'
import { formBuilderSelector } from 'redux/form/selectors'
import { COLORS } from 'styles'
import Icon from 'components/shared/Icon'
import Textinput from 'components/shared/Textinput'
import Checkbox from 'components/shared/Checkbox'
import TitleInput from './TitleInput'

const TableRow = styled.tr`
  & > td {
    padding-bottom: 16.3px;
    font-size: 10px;
  }
`
const DragIcon = styled(Icon)`
  display: block;
  width: 26px;
`
const ResponsiveCell = styled.td`
  width: ${props => props.widthPercentage}%;
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

  return (
    <TableRow className={className}>
      <td>
        <DragIcon
          width="12"
          height="24"
          name="draggable"
          className="draggable"
        />
      </td>
      <ResponsiveCell widthPercentage="65">
        <TitleInput
          inputPath={input}
          component={Textinput}
          name={`${input}.title`}
        />
      </ResponsiveCell>
      <ResponsiveCell widthPercentage="25">
        {fieldType}
      </ResponsiveCell>
      <ResponsiveCell widthPercentage="10">
        <RequiredField
          type="checkbox"
          component={Checkbox}
          name={`${input}.required`}
        />
      </ResponsiveCell>
      <td>
        <DeleteButton onClick={handleRemoveClick}>
          Remove
        </DeleteButton>
      </td>
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
  connect(
    (state, { input }) => ({
      fieldType: formBuilderSelector(state, `${input}.type`),
    }),
  ),
  SortableElement,
)(FieldEditor)
