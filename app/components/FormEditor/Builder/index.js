import React from 'react'
import styled from 'styled-components'
import { map, every, get } from 'lodash/fp'
import { reduxForm, Field, FieldArray, arrayMove } from 'redux-form'
import { dispatch } from 'redux/store'
import { media, COLORS } from 'styles'
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

  ${media.phone`
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
  height: 55px;
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
  cursor: pointer;
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
  ![...target.parentNode.classList].includes('draggable')
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

const Builder = ({ handleSubmit, className, error }) => (
  <FormContainer className={className} onKeyDown={preventSubmitOnEnter}>
    <Form onSubmit={handleSubmit}>
      <HeadingRow>
        <TitleField name="title" component={Textinput} />
        <SaveButton type="submit">Save form</SaveButton>
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
        shouldCancelStart={shouldCancelStart}
      />
    </Form>
  </FormContainer>
)

const eachWithPositiveLength = every(get('length'))
// const hasDuplicates = array => new Set(array).size !== array.length

export default reduxForm({
  form: 'formBuilder',
  onSubmit: values => console.log(values), // eslint-disable-line
  validate: ({ fields }, props) => {
    console.log(props)
    const error = {}

    const titles = map(get('title'), fields)
    const titlesNotEmpty = eachWithPositiveLength(titles)
    // const titlesUniq = !hasDuplicates(titles)

    // const options = map(get('options'), fields)
    // const optionsNotEpmty = eachWithPositiveLength(titles)
    // const optionsUniq = !hasDuplicates(options)

    if (!titlesNotEmpty) {
      error._error = 'Lol'
    }

    return error
  },
})(Builder)
