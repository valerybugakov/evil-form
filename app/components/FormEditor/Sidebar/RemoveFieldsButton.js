import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { arrayRemoveAll } from 'redux-form'
import { dispatch } from 'redux/store'
import { formBuilderSelector } from 'redux/formBuilder/selectors'
import { media, actionButtonCSS, COLORS } from 'styles'

const Button = styled.button`
  ${actionButtonCSS}
  position: absolute;
  bottom: 0;
  margin-top: 15px;
  width: 100%;
  color: ${COLORS.REMOVE};
  border-color: ${COLORS.REMOVE};

  &:hover {
    background-color: ${COLORS.REMOVE};
  }

  ${media.upToMedium`
    position: relative;
  `}
`

const removeFields = () => dispatch(arrayRemoveAll('formBuilder', 'fields'))

const RemoveFieldsButton = ({ hasFields }) => (
  <Button disabled={!hasFields} onClick={removeFields}>
    Remove all questions
  </Button>
)

export default connect(state => ({
  hasFields: formBuilderSelector(state, 'fields.length') > 0,
}))(RemoveFieldsButton)
