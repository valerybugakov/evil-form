import React from 'react'
import styled from 'styled-components'
import { media } from 'helpers/styles'
import Sidebar from './Sidebar'
import Builder from './Builder'

const EditorContainer = styled.div`
  flex: 1;
  margin: 0;

  ${media.mediumUp`
    flex: 0 1 auto;
  `}
`

const FormEditor = () => (
  <EditorContainer className="row">
    <Sidebar className="col-xs-12 col-sm-12 col-md-4" />
    <Builder className="col-sm-12 col-md-8" />
  </EditorContainer>
)

export default FormEditor
