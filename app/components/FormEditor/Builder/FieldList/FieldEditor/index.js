import React from 'react'
import { Field } from 'redux-form'
import { get, map } from 'lodash/fp'
import styled from 'styled-components'
import { SortableElement } from 'react-sortable-hoc'
import { compose, shouldUpdate } from 'recompose'
import { required, uniq, withFieldRemoveHandler } from 'utils/form'
import { fieldTypes } from 'redux/constants'
import { injectBuilderValues } from 'redux/utils'
import { media, COLORS } from 'styles'
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

    ${media.upToPhone`
      font-size: 12px;

      textarea:enabled,
      input:enabled {
        font-size: 16px;
      }
    `}
  }
`
const TableCell = styled.td`
  padding-bottom: 35px;

  ${media.upToPhone`
    display: flex;
    justify-content: space-between;
    padding-bottom: 25px;

    &:before {
      display: block;
      content: attr(data-label);
      text-transform: uppercase;
      color: ${COLORS.INACTIVE};
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
      width: 60%;
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
  color: ${COLORS.INACTIVE};

  &:hover {
    color: ${COLORS.HIGHLIGHTED};
  }

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
const RemoveIcon = styled(Icon)`
  float: right;
  cursor: pointer;
  color: #828282;

  &:hover {
    color: ${COLORS.REMOVE};
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
          errorLabel="Title"
          component={Textinput}
          name={`${input}.title`}
          placeholder="Question title"
          validate={[required, uniq(input, map(get('title')))]}
        />
      </TitleCell>
      <ChoicesCell data-label="Preview">
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
        <RemoveIcon
          width="14"
          height="18"
          name="delete"
          tabIndex="0"
          onClick={handleRemoveClick}
        />
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
