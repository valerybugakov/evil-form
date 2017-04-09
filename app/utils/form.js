import { withHandlers } from 'recompose'

export const required = value => value ? undefined : 'Required'

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
