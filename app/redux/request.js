import fetch from 'isomorphic-fetch'

const BASE_URL = ''

export default function request(config) { // eslint-disable-line
  const { url, data, method, mock } = config

  console.log( // eslint-disable-line
    `${method || 'GET'} to API/${url}
    ${data && method ? JSON.stringify(data, null, 2) : ''}`,
  )

  if (mock) {
    return new Promise(resolve =>
      setTimeout(() => resolve(mock), 100),
    )
  }

  const body = data instanceof FormData ? data : JSON.stringify(data || {})

  return fetch(`${BASE_URL}${url}`, {
    ...config,
    mode: 'no-cors',
    method: method || 'GET',
    body: method ? body : null,
    headers: data instanceof FormData ? undefined : {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
  .then(async response => {
    if (!response.ok) {
      return Promise.reject(response)
    }
    const text = await response.text()
    const json = text ? JSON.parse(text) : {}
    return { json, response }
  })
  .then(
    ({ json }) => json,
  )
  .catch(err => { throw err })
}
