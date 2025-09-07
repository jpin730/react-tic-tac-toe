export const setStorageItems = (values) => {
  const entries = Object.entries(values)
  entries.forEach(
    ([key, value]) =>
      value &&
      sessionStorage.setItem(key, typeof value === 'object' ? JSON.stringify(value) : value),
  )
}

export const getStorageItem = (key) => {
  const item = sessionStorage.getItem(key)
  return item && /^[{[].*[}\]]$/g.test(item) ? JSON.parse(item) : item
}

export const removeStorageItems = (values) => {
  const keys = Object.keys(values)
  keys.forEach((key) => sessionStorage.removeItem(key))
}
