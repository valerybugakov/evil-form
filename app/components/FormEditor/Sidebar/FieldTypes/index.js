import React from 'react'
import styled from 'styled-components'
import { fieldTypes } from 'redux/constants'
import FieldType from './FieldType'

const FieldList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const FieldTypes = () => (
  <FieldList>
    {
      fieldTypes.map(config => (
        <FieldType
          key={config.type}
          {...config}
        />
      ))
    }
  </FieldList>
)

export default FieldTypes
