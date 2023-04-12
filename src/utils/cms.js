/* eslint-disable no-underscore-dangle */

export const contentfulArrayToObject = (array = []) =>
  array.reduce((obj, item) => {
    const existingItem = obj[item.__typename]
    // This is to check if the object already exists.
    // If it does, push the new item as an array
    // Else, just put the item inside the object
    let newItem = item
    if (existingItem) {
      if (existingItem.length) newItem = [...existingItem, item]
      else newItem = [existingItem, item]
    }
    return {
      ...obj,
      [item.__typename]: newItem,
    }
  }, {})

export const filterItemByPropertyName = ({
  arrayToFilter,
  propertyName = '__typename',
  propertyValue,
}) => arrayToFilter.filter((item) => item[propertyName] === propertyValue)

export const getDescription = (raw) => {
  if (!raw) {
    return ''
  }
  const rawDescription = JSON.parse(raw)
  return rawDescription?.content[0].content[0].value
}
