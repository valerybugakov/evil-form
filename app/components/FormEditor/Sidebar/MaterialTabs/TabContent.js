import React from 'react'
import styled from 'styled-components'
import { COLORS } from 'styles'

const Description = styled.h5`
  margin: 15px 0;
  padding-bottom: 15px;
  font-size: 10px;
  font-weight: normal;
  color: ${COLORS.INACTIVE};
  border-bottom: 1px solid ${COLORS.BORDER};
`
const Title = styled.h3`
  font-size: 15px;
  font-weight: normal;
`

const TabContent = ({ children, className, description, title }) => (
  <div className={className}>
    <Description>{description}</Description>
    <Title>{title}</Title>
    {children}
  </div>
)

export default TabContent
