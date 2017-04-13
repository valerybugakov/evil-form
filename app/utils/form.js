import { withHandlers } from 'recompose'
import { compose, filter, get, identity } from 'lodash/fp'

export const required = value => value ? undefined : 'required'

export const hasItems = value =>
  value && value.length ? undefined : 'must not be empty'

export const uniq = (path, getter = identity) => (maybeUniq, allValues) => {
  const matches = compose(
    filter(value => value === maybeUniq),
    getter,
    get(path.slice(0, path.lastIndexOf('['))),
  )(allValues)

  return matches.length === 1 ? undefined : 'must be uniq'
}

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
