export const checkValidation = (name, email, number) => {
  const validateEntries = {}

  validateEntries.name = new RegExp(
    /^([a-zA-Z\u0600-\u06FF]+(?: [a-z A-Z\u0600-\u06FF']+)?)$/,
  ).test(name)
  validateEntries.email = new RegExp(
    /^[a-zA-Z0-9.!#$%&'*+=?^_`{|}~-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-]/,
  ).test(email)
  if (typeof number !== 'undefined') {
    validateEntries.number = new RegExp(/^\d{8}$/).test(number)
  }

  return {
    status: Object.values(validateEntries).every((value) => value === true),
    validateEntries,
  }
}
