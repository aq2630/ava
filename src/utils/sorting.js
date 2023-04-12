export const categorySorting = (blogs) => {
  return blogs.reduce(
    (accumulator, currentItem) => {
      // looping through each category of a single item
      currentItem.blogCategories.forEach((item) => {
        const previousItem =
          accumulator.sortedCategories[item.categoryName] || []

        // setting sorted object keys as per category name and appending items as an array
        accumulator.sortedCategories[item.categoryName] = [
          ...previousItem,
          currentItem,
        ]
      })
      return accumulator
    },
    { sortedCategories: {} },
  )
}
