import React from 'react'
import styled from 'styled-components'
import { reduxForm, Field, FieldArray, arrayMove } from 'redux-form'
import { dispatch } from 'redux/store'
import { media } from 'styles'
import Textinput from 'components/shared/Textinput'
import DescriptionRow from './DescriptionRow'
import FieldList from './FieldList'

const FormContainer = styled.main`
  padding: 54px 50px 0 50px;

  ${media.mediumUp`
    padding: 15px 0 0 0;
  `}
`
const Form = styled.form`
  height: 100%;
  padding: 13px 50px;
  background: #fff;
`
const TitleField = styled(Field)`
  width: 80%;
  font-size: 15px;
  font-weight: normal;
`
const HeadingRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 21px;
`
const SaveButton = styled.button`
  width: 100px;
  height: 26.9px;
  color: #bec4ea;
  cursor: pointer;
  font-size: 10px;
  border-radius: 4px;
  background-color: #ffffff;
  border: solid 1px #bec4ea;

  &:hover {
    color: #fff;
    border-width: 0;
    background-image: radial-gradient(circle at 50% 51%, #9aa5ec, #7d88d4);
  }
`

const shouldCancelStart = ({ target }) => (
  ![...target.parentNode.classList].includes('draggable')
)

const onSortEnd = ({ oldIndex, newIndex }) => {
  if (oldIndex !== newIndex) {
    dispatch(arrayMove('formBuilder', 'fields', oldIndex, newIndex))
  }
}

const Builder = ({ handleSubmit, className }) => (
  <FormContainer className={className}>
    <Form onSubmit={handleSubmit}>
      <HeadingRow>
        <TitleField
          required
          name="title"
          component={Textinput}
        />
        <SaveButton type="submit">Save form</SaveButton>
      </HeadingRow>
      <DescriptionRow />
      <FieldArray
        name="fields"
        component={FieldList}
        onSortEnd={onSortEnd}
        shouldCancelStart={shouldCancelStart}
      />
    </Form>
  </FormContainer>
)

export default reduxForm({
  form: 'formBuilder',
  onSubmit: values => console.log(values), // eslint-disable-line
})(Builder)
