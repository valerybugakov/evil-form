import React from 'react'
import styled from 'styled-components'
import { Route } from 'react-router-dom'
import { media } from 'styles'
import Sidebar from './Sidebar'
import Editor from './Builder/Editor'
import Builder from './Builder'

const EditorContainer = styled.div`
  display: flex;
  min-height: calc(100vh - 64px);

  ${media.upToMedium`
    display: block;
  `}

  ${media.upToPhone`
    textarea:enabled,
    input:enabled {
      font-size: 16px;
    }
  `}
`
const FixedSidebar = styled(Sidebar)`
  position: fixed;
  display: flex;
  width: 280px;
  height: calc(100% - 64px);

  ${media.upToMedium`
    position: relative;
    width: 100%;
    height: auto;
  `}
`

const FormEditorLayout = () => (
  <EditorContainer>
    <FixedSidebar />
    <Route exact path="/forms/edit/:formId" component={Editor} />
    <Route exact path="/forms/create" component={Builder} />
  </EditorContainer>
)

export default FormEditorLayout
