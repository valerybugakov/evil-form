import { createBrowserHistory } from 'history'

export const history = createBrowserHistory()
export const redirect = (...args) => history.push(...args)
