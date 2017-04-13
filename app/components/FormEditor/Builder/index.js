import React from 'react'
import styled from 'styled-components'
import { reduxForm, Field, FieldArray } from 'redux-form'
import { promisifyAction } from 'redux/utils'
import { saveForm } from 'redux/formBuilder/actions'
import { required, hasItems } from 'utils/form'
import { media } from 'styles'
import Textinput from 'components/shared/Textinput'
import DescriptionRow from './DescriptionRow'
import FieldList from './FieldList'

const FormContainer = styled.main`
  width: calc(100% - 280px);
  margin-left: 280px;
  padding: 20px;

  ${media.upToMedium`
    width: 100%;
    margin-left: 0;
    padding: 15px 0 0 0;
  `}
`
const Form = styled.form`
  height: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 25px 40px 50px 45px;
  background: #fff;

  ${media.upToPhone`
    padding: 13px 15px;
  `}
`
const TitleField = styled(Field)`
  width: 100%;
  font-size: 18px;
  font-weight: normal;
  margin-bottom: 24px;
`

const preventSubmitOnEnter = e => {
  if (e.keyCode === 13) {
    e.preventDefault()
  }
}

const Builder = ({ handleSubmit, className }) => (
  <FormContainer
    className={className}
    onKeyDown={preventSubmitOnEnter}
  >
    <Form onSubmit={handleSubmit}>
      <TitleField
        name="title"
        component={Textinput}
        placeholder="Form Title"
        errorLabel="Form Title"
        validate={required}
      />
      <DescriptionRow />
      <FieldArray
        name="fields"
        component={FieldList}
        validate={hasItems}
      />
    </Form>
  </FormContainer>
)

export default reduxForm({
  form: 'formBuilder',
  onSubmit: values => promisifyAction(saveForm, values),
})(Builder)
