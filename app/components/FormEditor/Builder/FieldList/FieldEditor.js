import React from 'react'
import { Field } from 'redux-form'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { compose, withHandlers, lifecycle } from 'recompose'
import { SortableElement } from 'react-sortable-hoc'
import { formBuilderSelector } from 'redux/form/selectors'
// import { getInputConfig, builderIdOptions } from 'redux/helpers'
// import draggable from 'assets/svg/draggable.svg'
import Icon from 'components/shared/Icon'
import Textinput from 'components/shared/Textinput'

export const dragColumnMargin = 14

const Container = styled.div`
  display: flex;
  margin-bottom: 16.3px;
`
const Title = styled.div`
  display: flex;
  align-items: center;
  height: 24px;
`
const DragIcon = styled(Icon)`
  margin-right: ${dragColumnMargin}px;
`
const DeleteButton = styled.button`
  min-width: 0 !important;
`
const Choices = styled.div`

`

const FieldEditor = ({
  className,
  input,
  fieldType,
  handleRemoveClick,
}) => {
  console.log('delete me')
  // const inputConfig = getInputConfig(inputType)

  // return null and fix sortableItem error
  // if (!inputConfig) return null

  // const {
  //   EditComponent,
  //   label,
  //   branched,
  //   terminal,
  //   validatable,
  // } = inputConfig

      // <EditComponent
      //   input={input}
      //   inputType={fieldType}
      // />

  return (
    <Container className={className}>
      <DragIcon
        width="12"
        height="24"
        name="draggable"
        className="draggable"
      />
      <Title>
        <Field
          type="text"
          component={Textinput}
          placeholder="Question Title"
          name={`${input}.title`}
        />
      </Title>
      <Choices>
        {fieldType}
      </Choices>
      <Field
        type="checkbox"
        component="input"
        name={`${input}.required`}
      />
      <DeleteButton onClick={handleRemoveClick}>
        Remove
      </DeleteButton>
    </Container>
  )
}

export default compose(
  lifecycle({
    shouldComponentUpdate() { return false },
  }),
  withHandlers({
    handleRemoveClick: ({ fields, index }) => _ => fields.remove(index),
  }),
  connect(
    (state, { input }) => ({
      fieldType: formBuilderSelector(state, `${input}.type`),
    }),
  ),
  SortableElement,
)(FieldEditor)
