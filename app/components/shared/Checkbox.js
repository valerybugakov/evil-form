import React from 'react'
import styled from 'styled-components'
import { COLORS } from 'styles'
import Icon from 'components/shared/Icon'

const HiddenInput = styled.input`
  position: absolute;
  width: 0;
  height: 0;
  opacity: 0;
  overflow: hidden;
`
const CheckIcon = styled(Icon)`
  display: block;
  width: 12px;
  height: 12px;
  cursor: pointer;
  color: #7d88d4;
  font-size: 1px;
  line-height: 10px;
  text-align: center;
  border: 1px solid ${COLORS.BORDER};

  & > svg {
    display: none;
  }
`
const Label = styled.label`
  position: relative;
  display: inline-block;
  vertical-align: bottom;

  ${HiddenInput}:focus + ${CheckIcon} {
    outline-width: initial;
    outline-style: auto;
    outline-color: Highlight;
  }

  @media (-webkit-min-device-pixel-ratio:0) {
    ${HiddenInput}:focus + ${CheckIcon} {
      outline-color: -webkit-focus-ring-color;
      outline-style: auto;
    }
  }

  ${HiddenInput}:checked + ${CheckIcon} {
    & > svg {
      display: inline;
    }
  }
`

const Checkbox = ({ className, input }) => (
  <Label className={className} role="button">
    <HiddenInput type="checkbox" {...input} />
    <CheckIcon name="checkmark" width="8" height="6" />
  </Label>
)

export default Checkbox
