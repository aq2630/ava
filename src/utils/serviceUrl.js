// need to pass hostname as url and serviceName e.g. "sprinklr"

export const getUrl = (url, serviceName) => {
  if (url === 'localhost') {
    return `http://${url}:3000/api/${serviceName}`
  }
  if (url === process.env.GATSBY_STAGING_URL) {
    return `https://${process.env.GATSBY_STAGING_URL}/api/${serviceName}`
  }
  return `https://${process.env.GATSBY_MAIN_URL}/api/${serviceName}`
}
