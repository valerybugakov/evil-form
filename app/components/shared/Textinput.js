import React from 'react'
import styled from 'styled-components'
import { compose, withState, withHandlers } from 'reassemble'
import { COLORS, growWidth } from 'styles'
import Icon from 'components/shared/Icon'

const InputWrapper = styled.div`
  position: relative;

  &::after {
    position: absolute;
    left: 0;
    bottom: -2px;
    display: block;
    width: 100%;
    height: 0;
    content: '';
    border-bottom: 1px solid ${COLORS.BORDER};
    animation: ${growWidth} 0.4s ease-out;
  }
`
const Input = styled.input`
  width: 100%;
  padding: 0;
  margin: 0;
  border: 0;
  outline: none;
  appearance: none;
`
const EditIcon = styled(Icon)`
  margin-left: 8px;
  cursor: pointer;
  color: #828282;

  &:hover {
    color: ${COLORS.HIGHLIGHTED};
  }
`
const RemoveIcon = EditIcon.extend`
  &:hover {
    color: ${COLORS.REMOVE};
  }
`
const InputValue = styled.span`
  /*
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  */

  &:after {
    display: ${props => props.required ? 'inline' : 'none'};
    content: '*';
    color: #ff0000;
    margin-left: 4px;
  }
`

const Textinput = ({
  input,
  required,
  className,
  inEditMode,
  handleBlur,
  handleEditClick,
  handleInputKeyUp,
  handleRemoveClick,
}) => {
  if (inEditMode) {
    return (
      <InputWrapper className={className}>
        <Input
          autoFocus
          {...input}
          onBlur={handleBlur}
          onKeyUp={handleInputKeyUp}
        />
      </InputWrapper>
    )
  }

  return (
    <div onFocus={handleEditClick} className={className}>
      <InputValue required={required}>
        {input.value}
      </InputValue>
      <EditIcon
        width="8"
        height="12"
        name="edit"
        tabIndex="0"
        onClick={handleEditClick}
      />
      {
        handleRemoveClick &&
        <RemoveIcon
          width="10"
          height="12"
          name="delete"
          onClick={handleRemoveClick}
        />
      }
    </div>
  )
}

const exitEditMode = (input, setEditMode, e) => {
  input.onBlur(e.target.value)
  setEditMode(false)
}

export default compose(
  withState('inEditMode', 'setEditMode', props => props.inEditMode),
  withHandlers({
    handleInputKeyUp: ({ input, setEditMode }) => e => {
      if (e.keyCode === 27 || e.keyCode === 13) { // handle Esc and Enter keys
        exitEditMode(input, setEditMode, e)
      }
    },
    handleBlur: ({ input, setEditMode }) => e => {
      exitEditMode(input, setEditMode, e)
    },
    handleEditClick: ({ setEditMode }) => _ => setEditMode(true),
  }),
)(Textinput)
