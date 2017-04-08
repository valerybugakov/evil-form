import React from 'react'
import styled from 'styled-components'
import { compose, withState, withHandlers } from 'recompose'
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
  margin: 0;
  padding: 0;
  border: 0;
  outline: none;
  appearance: none;
`
const EditIcon = styled(Icon)`
  margin-left: 4px;
  padding-left: 4px;
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
  word-break: break-word;

  &:after {
    display: ${props => props.required ? 'inline' : 'none'};
    content: '*';
    color: #ff0000;
    margin-left: 4px;
  }
`
const Placeholder = styled.span`
  color: ${COLORS.INACTIVE};
`

const Textinput = ({
  input,
  required,
  className,
  inEditMode,
  handleBlur,
  placeholder,
  handleEditClick,
  handleFocusKeyUp,
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
    <div className={className}>
      <InputValue
        tabIndex="0"
        required={required}
        onFocus={handleEditClick}
      >
        {input.value || <Placeholder>{placeholder}</Placeholder>}
      </InputValue>
      <EditIcon
        width="8"
        height="12"
        name="edit"
        onClick={handleEditClick}
      />
      {
        handleRemoveClick &&
        <RemoveIcon
          width="10"
          height="12"
          name="delete"
          tabIndex="0"
          onKeyUp={handleFocusKeyUp}
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
  withState(
    'inEditMode',
    'setEditMode',
    ({ inEditMode, input }) => inEditMode && !input.value
  ),
  withHandlers({
    handleInputKeyUp: ({ input, setEditMode }) => e => {
      if (e.keyCode === 27 || e.keyCode === 13) { // handle Esc and Enter keys
        exitEditMode(input, setEditMode, e)
      }
    },
    handleFocusKeyUp: ({ handleRemoveClick }) => e => {
      if (
        e.target === document.activeElement &&
        (e.keyCode === 32 || e.keyCode === 13)
      ) {
        handleRemoveClick(e)
      }
    },
    handleBlur: ({ input, setEditMode }) => e => {
      exitEditMode(input, setEditMode, e)
    },
    handleEditClick: ({ setEditMode }) => _ => setEditMode(true),
  }),
)(Textinput)
