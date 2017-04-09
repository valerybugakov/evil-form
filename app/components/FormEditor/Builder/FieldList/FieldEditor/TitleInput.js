import { Field } from 'redux-form'
import styled from 'styled-components'
import { injectBuilderValues } from 'redux/utils'
import { media } from 'styles'

const TitleField = styled(Field)`
  width: 90%;

  ${media.upToPhone`
    display: flex;
    width: 85%;
    flex-direction: row-reverse;

    &:before {
      margin-left: 4px;
      margin-right: 0;
    }
  `}
`

export default injectBuilderValues(({ inputPath }) => ({
  required: `${inputPath}.required`,
}))(TitleField)
