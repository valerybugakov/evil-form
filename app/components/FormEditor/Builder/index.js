import React from 'react'
import styled from 'styled-components'
import { reduxForm, Field, FieldArray, arrayMove } from 'redux-form'
import { dispatch } from 'redux/store'
import { promisifyAction } from 'redux/utils'
import { saveForm } from 'redux/formBuilder/actions'
import { required, hasItems } from 'utils/form'
import { media, actionButtonCSS } from 'styles'
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
  padding: 25px 40px 50px 45px;
  background: #fff;

  ${media.upToPhone`
    padding: 13px 15px;
  `}
`
const TitleField = styled(Field)`
  width: calc(100% - 150px);
  font-size: 18px;
  font-weight: normal;
`
const HeadingRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 21px;
`
const SaveButton = styled.button`
  ${actionButtonCSS}
`

const shouldCancelStart = ({ target }) => (
  !Array.prototype.includes.call(target.parentNode.classList, 'draggable')
)

const onSortEnd = ({ oldIndex, newIndex }) => {
  if (oldIndex !== newIndex) {
    dispatch(arrayMove('formBuilder', 'fields', oldIndex, newIndex))
  }
}

const preventSubmitOnEnter = e => {
  if (e.keyCode === 13) {
    e.preventDefault()
  }
}

const Builder = ({ handleSubmit, className, submitting, pristine, valid }) => (
  <FormContainer
    className={className}
    onKeyDown={preventSubmitOnEnter}
  >
    <Form onSubmit={handleSubmit}>
      <HeadingRow>
        <TitleField
          name="title"
          component={Textinput}
          placeholder="Form Title"
          errorLabel="Form Title"
          validate={required}
        />
        <SaveButton
          type="submit"
          disabled={!valid || submitting || pristine}
        >
          Save form
        </SaveButton>
      </HeadingRow>
      <DescriptionRow />
      <FieldArray
        name="fields"
        component={FieldList}
        onSortEnd={onSortEnd}
        useWindowAsScrollContainer
        helperClass="draggable-helper"
        shouldCancelStart={shouldCancelStart}
        validate={hasItems}
      />
    </Form>
  </FormContainer>
)

export default reduxForm({
  form: 'formBuilder',
  onSubmit: values => promisifyAction(saveForm, values),
})(Builder)
