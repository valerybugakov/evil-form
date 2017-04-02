import React from 'react'
import { FieldArray } from 'redux-form'
import styled, { css } from 'styled-components'
import TextareaShared from 'components/shared/Textarea'
import Options from './Options'

const ChoiceLabel = styled.div`
  width: 116px;
  height: 20.2px;
  padding: 4px 7px;
  margin-top: -3px;
  font-size: 9px;
  font-family: 'Helvetica Neue', Helvetica, 'Open Sans', sans-serif;
  color: #999999;
  border-radius: 4px;
  border: solid 1px #ccc;
`
const TextareaCSS = css`
  padding: 4px 7px;
  width: 116px;
  max-width: 116px;
  height: 40px;
  max-height: 40px;
  margin-top: -3px;
`

export const Text = () => <ChoiceLabel>Single-line text</ChoiceLabel>
export const File = () => <ChoiceLabel>File upload</ChoiceLabel>

export const Textarea = () => (
  <TextareaShared
    disabled
    css={TextareaCSS}
    value="Paragraph-text"
  />
)

export const WithOptions = ({ input, ...rest }) => (
  <FieldArray
    component={Options}
    name={`${input}.options`}
    {...rest}
  />
)
