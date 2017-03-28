import React from 'react'
import styled from 'styled-components'

// eslint-disable-next-line no-unused-vars
const Textarea = ({ className, meta, input = {}, css, ...rest }) => (
  <textarea
    className={className}
    {...input}
    {...rest}
  />
)

export default styled(Textarea)`
  padding: 9px;
  color: #999999;
  font-size: 10px;
  font-family: 'Helvetica Neue', Helvetica, 'Open Sans', sans-serif;
  border-radius: 4px;
  border: solid 1px #ccc;
  background-color: #fff;
  ${props => props.css}
`
