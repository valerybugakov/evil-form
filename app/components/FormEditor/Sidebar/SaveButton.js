import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { isValid, isSubmitting, isPristine, submit } from 'redux-form'
import { dispatch } from 'redux/store'
import { actionButtonCSS } from 'styles'

const Button = styled.button`
  ${actionButtonCSS}
  margin-top: 15px;
  width: 100%;
`

const submitForm = () => dispatch(submit('formBuilder'))

const SaveButton = ({ submitEnabled }) => (
  <Button onClick={submitForm} disabled={submitEnabled}>
    Save form
  </Button>
)

export default connect(state => ({
  submitEnabled: (
    !isValid('formBuilder')(state) ||
    isSubmitting('formBuilder')(state) ||
    isPristine('formBuilder')(state)
  ),
}))(SaveButton)
