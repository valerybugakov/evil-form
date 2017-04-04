export const fakeStore = {
  // temp dispatch that will be reassigned with a real one
  dispatch: payload => console.log(payload), // eslint-disable-line
}

export default (...args) => fakeStore.dispatch(...args)
