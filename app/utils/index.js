import { every, get } from 'lodash/fp'

export const allWithPositiveLength = every(get('length'))
export const hasDuplicates = array => new Set(array).size !== array.length
