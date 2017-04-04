import { Field } from 'redux-form'
import styled from 'styled-components'
import { injectBuilderValues } from 'redux/utils'

const TitleField = styled(Field)`
  width: 85%;
  min-width: 100px;
  font-size: 11.3px;
`

export default injectBuilderValues(({ inputPath }) => ({
  required: `${inputPath}.required`,
}))(TitleField)
