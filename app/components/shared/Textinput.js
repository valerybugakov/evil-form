import React from 'react'
import styled from 'styled-components'
import { withHandlers } from 'recompose'
import { COLORS } from 'styles'
import Icon from 'components/shared/Icon'

const InputWrapper = styled.div`
  position: relative;

  &:before {
    display: ${props => props.required ? 'inline-block' : 'none'};
    content: '*';
    color: #ff0000;
    margin-right: 4px;
  }
`
const Input = styled.input`
  width: ${props => props.required ? 'calc(100% - 15px)' : '100%'};
  margin: 0;
  padding: 4px 0;
  border: 0;
  border-radius: 0;
  outline: none;
  appearance: none;
  border-bottom: 1px solid ${props => props.error
    ? COLORS.ERROR
    : 'transparent'
  };

  ${InputWrapper}:hover & {
    border-color: ${props => props.error ? COLORS.ERROR : COLORS.BORDER};
  }

  ${InputWrapper} &:focus {
    border-color: ${props => props.error ? COLORS.ERROR : COLORS.HIGHLIGHTED};
  }
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
    color: ${COLORS.REMOVE} !important;
  }
`
const MetaInfo = styled.span`
  position: absolute;
  left: 0;
  bottom: -18px;
  display: block;
  width: 100%;
  padding-top: 6px;
  font-size: 12px;
  color: ${props => props.error ? COLORS.ERROR : COLORS.SECONDARY};
`

const Textinput = ({
  input,
  required,
  className,
  errorLabel,
  placeholder,
  handleFocusKeyUp,
  handleRemoveClick,
  meta: { error, dirty, touched },
}) => (
  <InputWrapper
    required={required}
    className={className}
    handleRemoveClick={handleRemoveClick}
  >
    <Input
      autoFocus
      {...input}
      error={error && (dirty || touched)}
      required={required}
      placeholder={placeholder}
    />
    {
      error && (dirty || touched) &&
      <MetaInfo error={error}>{errorLabel} {error}</MetaInfo>
    }
    {
      handleRemoveClick &&
      <RemoveIcon
        width="16"
        height="18"
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
