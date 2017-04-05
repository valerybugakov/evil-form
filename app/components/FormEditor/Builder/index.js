import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { withRouter } from 'react-router'
import { compose, map, filter, get, identity } from 'lodash/fp'
import { reduxForm, Field, FieldArray, arrayMove } from 'redux-form'
import { dispatch } from 'redux/store'
import { promisifyAction } from 'redux/utils'
import { saveForm } from 'redux/formBuilder/actions'
import { allWithPositiveLength, hasDuplicates } from 'utils'
import { media, actionButtonCSS } from 'styles'
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
  margin-bottom: 22.9px;
  padding: 0 25px;
  color: #973133;
  font-size: 12px;
  background-color: #f2dede;
  border-radius: 4px;
  border: solid 1px #ebcccc;
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

const Builder = ({ handleSubmit, className, error, submitting, pristine }) => (
  <FormContainer
    className={className}
    onKeyDown={preventSubmitOnEnter}
  >
    <Form onSubmit={handleSubmit}>
      <HeadingRow>
        <TitleField name="title" component={Textinput} />
        <SaveButton
          type="submit"
          disabled={!!error || submitting || pristine}
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

/* eslint-disable consistent-return, no-restricted-syntax */
const validateEmptyAndUniq = (fieldLabel, values) => {
  const valuesNotEmpty = allWithPositiveLength(values)

  if (!valuesNotEmpty) {
    return `${fieldLabel} must be non empty`
  }

  const valuesUniq = !hasDuplicates(values)

  if (!valuesUniq) {
    return `${fieldLabel} must be uniq`
  }
}

const formValueVaidators = [
  (_, title) => {
    if (title.length === 0) {
      return 'Form title must be non empty'
    }
  },
  fields => {
    if (fields.length === 0) {
      return 'Form should have at least one field'
    }
  },
  fields => {
    const titles = map(get('title'), fields)
    return validateEmptyAndUniq('Question titles', titles)
  },
  fields => {
    const optionFields = compose(filter(identity), map(get('options')))(fields)

    for (const options of optionFields) {
      const message = options.length === 0
        ? 'Choices must be non empty'
        : validateEmptyAndUniq('Choices', options)

      if (message) return message
    }
  },
]
/* eslint-enable consistent-return, no-restricted-syntax */

export default compose(
  withRouter,
  connect((state, { match }) => ({
    initialValues: state.formBuilder.savedForms[match.params.formId],
  })),
  reduxForm({
    form: 'formBuilder',
    onSubmit: values => promisifyAction(saveForm, values),
    validate: ({ title = '', fields = [] }) => {
      const error = {}

      formValueVaidators.some(validate => {
        error._error = validate(fields, title)
        return error._error
      })

      return error
    },
  })
)(Builder)
