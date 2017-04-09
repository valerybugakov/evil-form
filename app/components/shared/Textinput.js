import React from 'react'
import styled from 'styled-components'
import { withHandlers } from 'recompose'
import { media, COLORS } from 'styles'
import Icon from 'components/shared/Icon'

const InputWrapper = styled.div`
  position: relative;

  &:before {
    display: ${props => props.required ? 'inline-block' : 'none'};
    content: '*';
    color: #ff0000;
    margin-right: 4px;
  }

  &::after {
    position: absolute;
    left: 0;
    bottom: -3px;
    display: block;
    width: ${props => props.handleRemoveClick ? 'calc(100% - 18px)' : '100%'};
    height: 0;
    content: '';
    border-bottom: 1px solid;
    border-color: ${props => props.error ? COLORS.BORDER_ERROR : COLORS.BORDER};
    transition: border-color 250ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;

    ${media.upToPhone`
      left: auto;
      right: 0;
    `}
  }
`
const Input = styled.input`
  width: ${props => props.required ? 'calc(100% - 15px)' : '100%'};
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

const Textinput = ({
  input,
  required,
  className,
  placeholder,
  handleFocusKeyUp,
  handleRemoveClick,
  meta: { error },
}) => (
  <InputWrapper
    error={error}
    required={required}
    className={className}
    handleRemoveClick={handleRemoveClick}
  >
    <Input
      autoFocus
      {...input}
      required={required}
      placeholder={placeholder}
    />
    {
      handleRemoveClick &&
      <RemoveIcon
        width="12"
        height="14"
        name="delete"
        tabIndex="0"
        onKeyUp={handleFocusKeyUp}
        onClick={handleRemoveClick}
      />
    }
  </InputWrapper>
)

export default withHandlers({
  handleFocusKeyUp: ({ handleRemoveClick }) => e => {
    if (
      e.target === document.activeElement &&
      (e.keyCode === 32 || e.keyCode === 13)
    ) {
      handleRemoveClick(e)
    }
  },
})(Textinput)
