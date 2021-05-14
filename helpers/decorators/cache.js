const NodeCache = require("node-cache")

const defaultCache = new NodeCache()

export const cacheable = (wrapper, { key, time = 10000 }) => {
  let response = defaultCache.get(key)

  if (response) return response

  response = wrapper()

  defaultCache.set(key, response, time)

  return response
}
