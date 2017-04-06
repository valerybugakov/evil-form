import React from 'react'
import { compose } from 'lodash/fp'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { Redirect } from 'react-router-dom'
import Builder from './index'

const Editor = props => props.initialValues
  ? <Builder {...props} />
  : <Redirect to="/forms/create" />

export default compose(
  withRouter,
  connect((state, { match }) => ({
    initialValues: state.formBuilder.savedForms[match.params.formId],
  })),
)(Editor)
