import React from 'react'
import { SortableContainer } from 'react-sortable-hoc'
import FieldEditor from './FieldEditor'

const TableBody = ({ fields }) => (
  <tbody>
    {
      fields.map((input, index) => (
        <FieldEditor
          key={input}
          input={input}
          index={index}
          fields={fields}
        />
      ))
    }
  </tbody>
)

export default SortableContainer(TableBody)
