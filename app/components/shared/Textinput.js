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
  margin-top: 1px;
  margin-left: 8px;
  cursor: pointer;
`

const Textinput = ({
  input,
  className,
  inEditMode,
  handleBlur,
  handleEditClick,
}) => {
  if (inEditMode) {
    return (
      <InputWrapper className={className}>
        <Input
          tabIndex="0"
          autoFocus
          {...input}
          onBlur={handleBlur}
        />
      </InputWrapper>
    )
  }

  return (
    <div onFocus={handleEditClick} className={className}>
      <span>{input.value}</span>
      <EditIcon
        width="8"
        height="12"
        name="edit"
        tabIndex="0"
        onClick={handleEditClick}
      />
    </div>
  )
}

export default compose(
  withState('inEditMode', 'setEditMode', false),
  withHandlers({
    handleBlur: ({ input, setEditMode }) => e => {
      input.onBlur(e.target.value)
      setEditMode(false)
    },
    handleEditClick: ({ setEditMode }) => _ => setEditMode(true),
  }),
)(Textinput)
