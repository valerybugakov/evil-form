import React from 'react'
import styled from 'styled-components'
import { media } from 'styles'
import Sidebar from './Sidebar'
import Builder from './Builder'

const EditorContainer = styled.div`
  display: flex;
  min-height: 100vh;

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
  width: 33.33%;
  height: 100%;

  ${media.upToMedium`
    position: relative;
    width: 100%;
    height: auto;
  `}
`
const FormBuilder = styled(Builder)`
  width: 66.66%;
  margin-left: 33.33%;

  ${media.upToMedium`
    width: 100%;
    margin-left: 0;
  `}
`

const FormEditor = () => (
  <EditorContainer>
    <FixedSidebar />
    <FormBuilder />
  </EditorContainer>
)

export default FormEditor
