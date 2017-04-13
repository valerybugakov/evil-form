import { Field } from 'redux-form'
import styled from 'styled-components'
import { injectBuilderValues } from 'redux/utils'
import { media } from 'styles'

const TitleField = styled(Field)`
  margin-bottom: 25px;

  ${media.upToPhone`
    display: flex;
    width: 100%;
    flex-direction: row-reverse;
    margin-top: 15px;

    &:before {
      margin-left: 4px;
      margin-right: 0;
    }
  `}
`

export default injectBuilderValues(({ inputPath }) => ({
  required: `${inputPath}.required`,
}))(TitleField)
