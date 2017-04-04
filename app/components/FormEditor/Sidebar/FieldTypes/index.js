import React from 'react'
import { fieldTypes } from 'redux/constants'
import FieldType from './FieldType'

const FieldTypes = () => (
  <div>
    {
      Object.entries(fieldTypes).map(([type, config]) => (
        <FieldType
          key={type}
          type={type}
          {...config}
        />
      ))
    }
  </div>
)

export default FieldTypes
