import React from 'react'
import { FieldArray } from 'redux-form'
import styled, { css } from 'styled-components'
import TextareaShared from 'components/shared/Textarea'
import Options from './Options'

const ChoiceLabel = styled.div`
  width: 150px;
  height: 28px;
  padding: 4px 7px;
  margin-top: -3px;
  font-family: 'Helvetica Neue', Helvetica, 'Open Sans', sans-serif;
  line-height: 19px;
  color: #999999;
  border-radius: 4px;
  border: solid 1px #ccc;
`
const TextareaCSS = css`
  padding: 4px 7px;
  width: 150px;
  max-width: 150px;
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
