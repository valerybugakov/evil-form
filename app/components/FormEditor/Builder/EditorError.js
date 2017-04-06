import React from 'react'
import { connect } from 'react-redux'
import { getFormSyncErrors } from 'redux-form'

// TODO: delete me
const EditorError = ({ error }) => (
  <div>{JSON.stringify(error)}</div>
)

export default connect(state => ({
  error: getFormSyncErrors('formBuilder')(state),
}))(EditorError)
