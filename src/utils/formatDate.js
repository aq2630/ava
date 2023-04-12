const locale = 'en-GB' // GB here to get the format of DD/MM/YYYY

const formatDate = (date) => {
  return date
    ? new Date(date).toLocaleDateString(locale).replace(/\//g, '-')
    : ''
}

export default formatDate
