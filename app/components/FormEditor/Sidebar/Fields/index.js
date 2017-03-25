import React from 'react'
import styled from 'styled-components'
import { fieldTypes } from 'redux/constants'
import FieldItem from './FieldItem'

const FieldList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const Fields = () => (
  <FieldList>
    {
      fieldTypes.map(config => (
        <FieldItem
          key={config.type}
          {...config}
        />
      ))
    }
  </FieldList>
)

export default Fields
