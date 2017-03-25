import React from 'react'
import { css } from 'styled-components'
import { reduxForm, Field } from 'redux-form'
import Textarea from 'components/shared/Textarea'

const TextareaStyles = css`
  width: 100%;
  min-height: 119.1px;
`

const Description = () => (
  <Field
    name="description"
    component={Textarea}
    css={TextareaStyles}
  />
)

export default reduxForm({ form: 'formBuilder' })(Description)
