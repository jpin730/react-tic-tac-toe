export const getStorageItem = (key) => {
  const item = sessionStorage.getItem(key)
  return item && /^[{[].*[}\]]$/g.test(item) ? JSON.parse(item) : item
}
