import { identity } from 'lodash/fp'
import { autoRehydrate } from 'redux-persist'
import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { fakeStore } from 'redux/utils/dispatch'

const sagaMiddleware = createSagaMiddleware()

export function configureStore(
  reducer = identity,
  initialState = {},
  rootSaga
) {
  const enhancers = [
    applyMiddleware(sagaMiddleware),
    autoRehydrate(),
  ]

  const composeEnhancers = (
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : compose
  )

  const store = createStore(
    reducer,
    initialState,
    composeEnhancers(...enhancers),
  )

  // Assign real dispatch for autobinded actions
  fakeStore.dispatch = store.dispatch

  if (rootSaga) {
    sagaMiddleware.run(rootSaga)
  }

  return store
}
