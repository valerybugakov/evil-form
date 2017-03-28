import { Field } from 'redux-form'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { formBuilderSelector } from 'redux/form/selectors'

const TitleField = styled(Field)`
  display: flex;
  align-items: center;
  width: 95%;
  font-size: 11.3px;
`

export default connect((state, { inputPath }) => ({
  required: formBuilderSelector(state, `${inputPath}.required`),
}))(TitleField)
