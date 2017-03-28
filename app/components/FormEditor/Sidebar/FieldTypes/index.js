import React from 'react'
import { fieldTypes } from 'redux/constants'
import FieldType from './FieldType'

const FieldTypes = () => (
  <div>
    {
      fieldTypes.map(config => (
        <FieldType
          key={config.type}
          {...config}
        />
      ))
    }
  </div>
)

export default FieldTypes
