import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: inline;
`

const Icon = ({ name, className, width, height, onClick }) => (
  <Container onClick={onClick}>
    <svg className={className} width={width} height={height}>
      <use xlinkHref={`#${name}`} />
    </svg>
  </Container>
)

export default Icon
