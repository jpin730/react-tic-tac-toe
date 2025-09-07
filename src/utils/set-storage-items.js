export const setStorageItems = (values) => {
  const entries = Object.entries(values)
  entries.forEach(
    ([key, value]) =>
      value &&
      sessionStorage.setItem(key, typeof value === 'object' ? JSON.stringify(value) : value),
  )
}
