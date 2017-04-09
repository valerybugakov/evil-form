import React from 'react'
import { Field } from 'redux-form'
import styled from 'styled-components'
import { required, withFieldRemoveHandler } from 'utils/form'
import { media, COLORS } from 'styles'
import Textinput from 'components/shared/Textinput'

const OptionContainer = styled.div`
  display: flex;
  width: 85%;
  min-height: 13px;
  margin-bottom: 7px;

  ${media.upToPhone`
    width: auto;
    flex-direction: row-reverse;
  `}
`
const TypeIndicator = styled.div`
  width: 14px;
  height: 14px;
  margin-top: 3px;
  margin-right: 5px;
  border: solid 1px ${COLORS.BORDER};

  ${props => props.fieldType === 'radio' && `
    border-radius: 8px;
  `}

  ${props => props.fieldType === 'select' && `
    height: 0;
    margin-top: 9px;
    border-top-width: 0;
  `}

  ${media.upToPhone`
    margin-right: 0;
  `}
`
const InputField = styled(Field)`
  display: flex;
  width: calc(100% - 17px);

  & span {
    color: ${COLORS.INACTIVE};
  }

  ${media.upToPhone`
    margin-right: 8px;
    flex-direction: row-reverse;
  `}
`

const OptionItem = ({ input, type, handleRemoveClick }) => (
  <OptionContainer>
    <TypeIndicator fieldType={type} />
    <InputField
      inEditMode
      name={input}
      component={Textinput}
      handleRemoveClick={handleRemoveClick}
      validate={[required]}
    />
  </OptionContainer>
)

export default withFieldRemoveHandler(OptionItem)
