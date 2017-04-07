import React from 'react'
import { Field } from 'redux-form'
import styled from 'styled-components'
import { SortableElement } from 'react-sortable-hoc'
import { compose, shouldUpdate } from 'recompose'
import { withFieldRemoveHandler } from 'utils/form'
import { fieldTypes } from 'redux/constants'
import { injectBuilderValues } from 'redux/utils'
import { buttonReset, media, COLORS } from 'styles'
import Icon from 'components/shared/Icon'
import Textinput from 'components/shared/Textinput'
import Checkbox from 'components/shared/Checkbox'
import TitleInput from './TitleInput'

const TableRow = styled.tr`
  vertical-align: top;

  ${media.upToPhone`
    position: relative;
    display: block;
    margin-bottom: 0.625em;
  `}

  &.draggable-helper {
    pointer-events: auto !important;
    color: #4f4f4f;
    background-color: hsla(0, 0%, 100%, 0.8);
  }
`
const TableCell = styled.td`
  padding-bottom: 20.3px;
  font-size: 10px;

  ${media.upToPhone`
    display: flex;
    justify-content: space-between;

    &:before {
      display: block;
      content: attr(data-label);
      text-transform: uppercase;
    }

    &:first-child {
      position: absolute;
      bottom: -2px;
      transform: rotate(90deg);
    }

    & input,
    & > div:last-child {
      text-align: right;
    }
  `}
`
const TitleCell = TableCell.extend`
  ${media.downToPhone`
    .draggable-helper & {
      width: 55%;
    }
  `}
`
const ChoicesCell = TableCell.extend`
  ${media.downToPhone`
    .draggable-helper & {
      width: 25%;
    }
  `}
`
const RequiredCell = TableCell.extend`
  ${media.downToPhone`
    .draggable-helper & {
      width: 10%;
    }
  `}
`
const DragIcon = styled(Icon)`
  display: block;
  width: 26px;
  margin-top: -4px;
  color: #dadada;

  & > svg {
    cursor: pointer;

    @media (-webkit-min-device-pixel-ratio:0) {
      cursor: -webkit-grab;
    }
  }
`
const RequiredField = styled(Field)`
  margin-top: 1px;
`
const DeleteButton = styled.button`
  ${buttonReset}
  width: 39px;
  color: ${COLORS.REMOVE};

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
  const Choices = fieldTypes[fieldType].choiceComponent

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
      <TitleCell data-label="Title">
        <TitleInput
          inputPath={input}
          component={Textinput}
          name={`${input}.title`}
          placeholder="Question title"
        />
      </TitleCell>
      <ChoicesCell data-label="Choices">
        <Choices
          input={input}
          type={fieldType}
        />
      </ChoicesCell>
      <RequiredCell data-label="Required?">
        <RequiredField
          type="checkbox"
          component={Checkbox}
          name={`${input}.required`}
        />
      </RequiredCell>
      <TableCell>
        <DeleteButton onClick={handleRemoveClick}>
          Remove
        </DeleteButton>
      </TableCell>
    </TableRow>
  )
}

export default compose(
  shouldUpdate(_ => false),
  withFieldRemoveHandler,
  injectBuilderValues(({ input }) => ({ fieldType: `${input}.type` })),
  SortableElement,
)(FieldEditor)
