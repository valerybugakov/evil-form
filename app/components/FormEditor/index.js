import React from 'react'
import styled from 'styled-components'
import { media } from 'styles'
import Sidebar from './Sidebar'
import Builder from './Builder'

const EditorContainer = styled.div`
  display: flex;
  flex: 1;
  margin: 0;

  ${media.upToMedium`
    display: block;
    flex: 0 1 auto;
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
  height: 100%;
  z-index: 1;
  width: 33.33333333%;
  flex-basis: 33.33333333%;

  ${media.upToMedium`
    position: relative;
    width: 100%;
    height: auto;
    flex-basis: 100%;
  `}
`
const FormBuilder = styled(Builder)`
  width: 66.66666667%;
  flex-basis: 66.66666667%;
  margin-left: 33.33333333%;

  ${media.upToMedium`
    margin-left: 0;
    width: 100%;
    flex-basis: 100%;
  `}
`

const FormEditor = () => (
  <EditorContainer>
    <FixedSidebar />
    <FormBuilder />
  </EditorContainer>
)

export default FormEditor
