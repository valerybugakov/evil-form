import React from 'react'
import styled from 'styled-components'
import { fieldTypes } from 'redux/constants'
import { media, COLORS } from 'styles'
import FieldType from './FieldType'

const Container = styled.div`
  ${media.upToMedium`
    border-bottom: 1px solid ${COLORS.BORDER};
  `}
`

const FieldTypes = () => (
  <Container>
    {
      Object.entries(fieldTypes).map(([type, config]) => (
        <FieldType
          key={type}
          type={type}
          {...config}
        />
      ))
    }
  </Container>
)

export default FieldTypes
