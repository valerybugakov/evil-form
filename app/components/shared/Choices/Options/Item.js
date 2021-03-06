import React from 'react'
import { Field } from 'redux-form'
import styled from 'styled-components'
import { required, uniq, withFieldRemoveHandler } from 'utils/form'
import { COLORS } from 'styles'
import Textinput from 'components/shared/Textinput'

const OptionContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 18px;
`
const TypeIndicator = styled.div`
  min-width: 16px;
  min-height: 16px;
  margin-right: 8px;
  border: solid 1px ${COLORS.BORDER};

  ${props => props.fieldType === 'radio' && `
    border-radius: 8px;
  `}

  ${props => props.fieldType === 'select' && `
    min-height: 0;
    border-top-width: 0;
  `}
`
const InputField = styled(Field)`
  display: flex;
  width: calc(100% - 17px);

  & span:last-child {
    color: ${COLORS.INACTIVE};
  }
`

const OptionItem = ({ input, type, handleRemoveClick }) => (
  <OptionContainer>
    <TypeIndicator fieldType={type} />
    <InputField
      inEditMode
      name={input}
      errorLabel="Option"
      component={Textinput}
      handleRemoveClick={handleRemoveClick}
      validate={[required, uniq(input)]}
    />
  </OptionContainer>
)

export default withFieldRemoveHandler(OptionItem)
