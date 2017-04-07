import { identity } from 'lodash/fp'

// Temp dispatch that will be reassigned with a real one
export const fakeStore = { dispatch: identity }

export default (...args) => fakeStore.dispatch(...args)
