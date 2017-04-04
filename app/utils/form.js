import { every, get } from 'lodash/fp'
import { withHandlers } from 'recompose'

export const allWithPositiveLength = every(get('length'))
export const hasDuplicates = array => new Set(array).size !== array.length

export const withFieldAddHandler = ({ payload }) => withHandlers({
  handleAddClick: ({ fields }) => e => {
    e.preventDefault()
    fields.push(payload)
  },
})

export const withFieldRemoveHandler = withHandlers({
  handleRemoveClick: ({ index, fields }) => e => {
    e.preventDefault()
    fields.remove(index)
  },
})