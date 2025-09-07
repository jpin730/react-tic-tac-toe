export const removeStorageItems = (values) => {
  const keys = Object.keys(values)
  keys.forEach((key) => sessionStorage.removeItem(key))
}
