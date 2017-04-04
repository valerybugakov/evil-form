import React from 'react'
import styled from 'styled-components'
import { reduxForm, Field, FieldArray, arrayMove } from 'redux-form'
import { compose, map, filter, get, identity } from 'lodash/fp'
import { dispatch } from 'redux/store'
import { initialValues } from 'redux/form/reducer'
import { allWithPositiveLength, hasDuplicates } from 'utils/form'
import { media, COLORS } from 'styles'
import Textinput from 'components/shared/Textinput'
import DescriptionRow from './DescriptionRow'
import FieldList from './FieldList'

const FormContainer = styled.main`
  padding: 54px 50px 0 50px;

  ${media.upToMedium`
    padding: 15px 0 0 0;
  `}
`
const Form = styled.form`
  height: 100%;
  padding: 13px 50px;
  background: #fff;

  ${media.upToPhone`
    padding: 13px 15px;
  `}
`
const TitleField = styled(Field)`
  width: calc(100% - 115px);
  font-size: 15px;
  font-weight: normal;
`
const HeadingRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 21px;
`
const ErrorMessage = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 34px; /* 55px */
  padding: 0 25px;
  margin-bottom: 22.9px;
  color: #973133;
  font-size: 12px;
  border-radius: 4px;
  background-color: #f2dede;
  border: solid 1px #ebcccc;
`
const SaveButton = styled.button`
  width: 100px;
  height: 26.9px;
  color: #bec4ea;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  font-size: 10px;
  border-radius: 4px;
  background-color: #ffffff;
  border: solid 1px #bec4ea;

  &:hover {
    color: #fff;
    border-width: 0;
    background-image: radial-gradient(
      circle at 50% 51%,
      #9aa5ec,
      ${COLORS.HIGHLIGHTED}
    );
  }
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

const Builder = ({ handleSubmit, className, error, submitting }) => (
  <FormContainer className={className} onKeyDown={preventSubmitOnEnter}>
    <Form onSubmit={handleSubmit}>
      <HeadingRow>
        <TitleField name="title" component={Textinput} />
        <SaveButton
          type="submit"
          disabled={!!error || submitting}
        >
          Save form
        </SaveButton>
      </HeadingRow>
      {
        error
          ? <ErrorMessage>{error}</ErrorMessage>
          : <DescriptionRow />
      }
      <FieldArray
        name="fields"
        component={FieldList}
        onSortEnd={onSortEnd}
        useWindowAsScrollContainer
        helperClass="draggable-helper"
        shouldCancelStart={shouldCancelStart}
      />
    </Form>
  </FormContainer>
)

const validateEmptyAndUniq = (fieldLabel, values) => {
  const valuesNotEmpty = allWithPositiveLength(values)

  if (!valuesNotEmpty) {
    return `${fieldLabel} must be non empty`
  }

  const valuesUniq = !hasDuplicates(values)

  if (!valuesUniq) {
    return `${fieldLabel} must be uniq`
  }

  return null
}

export default reduxForm({
  form: 'formBuilder',
  initialValues,
  onSubmit: values => console.log(values), // eslint-disable-line
  validate: ({ fields }) => {
    const error = {}

    if (fields.length === 0) {
      error._error = 'Form should have at least one field'
      return error
    }

    const titles = map(get('title'), fields)
    error._error = validateEmptyAndUniq('Question titles', titles)
    if (error._error) {
      return error
    }

    const optionFields = compose(filter(identity), map(get('options')))(fields)
    optionFields.some(options => {
      error._error = options.length === 0
        ? 'Choices must be non empty'
        : validateEmptyAndUniq('Choices', options)

      return error._error
    })

    return error
  },
})(Builder)
