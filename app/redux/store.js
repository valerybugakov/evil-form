import { configureStore } from 'redux/utils'
import rootReducer from 'redux/reducer'
import rootSaga from 'redux/sagas'

const store = configureStore(rootReducer, rootSaga, {})

/* istanbul ignore next */
if (module.hot) {
  module.hot.accept('redux/reducer', () => {
    import('redux/reducer').then(reducerModule => {
      const nextReducers = reducerModule.default
      store.replaceReducer(nextReducers)
    })
  })
}

export const dispatch = store.dispatch
export default store
