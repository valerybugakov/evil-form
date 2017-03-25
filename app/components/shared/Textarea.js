import React from 'react'
import styled from 'styled-components'

const Textarea = ({ className, input = {} }) => (
  <textarea className={className} {...input} />
)

export default styled(Textarea)`
  padding: 9px;
  color: #999999;
  font-size: 10px;
  font-family: 'Helvetica', sans-serif;
  border-radius: 4px;
  border: solid 1px #ccc;
  background-color: #fff;
  ${props => props.css}
`
