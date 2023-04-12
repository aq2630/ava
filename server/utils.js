const fetch = require('node-fetch')
const fs = require('fs')
const {
  SPRINKLR_API_URL,
  SPRINKLR_CLIENT_ID,
  SPRINKLR_REDIRECT_URI,
  SPRINKLR_API_BASE_URL,
  SPRINKLR_AUTH_URL,
} = require('./config')

// need to pass header object as headerprops when calling this function
const getHeaders = (headerprops) => {
  const reqHeaders = new fetch.Headers()
  Object.entries(headerprops).map((entry) => {
    const [key, value] = entry
    return reqHeaders.append(key, value)
  })

  return reqHeaders
}

const sprinklrFormSubmission = async (req) => {
  const accessToken = await fs.readFileSync('sprinklr-token.txt', 'utf8')

  const reqHeaders = getHeaders({
    key: SPRINKLR_CLIENT_ID,
    Authorization: `Bearer ${accessToken}`,
    'Cache-Control': 'no-cache',
    'Content-Type': 'application/json',
  })

  const requestOptions = {
    method: 'POST',
    headers: reqHeaders,
    body: JSON.stringify(req.body),
    redirect: 'follow',
  }
  return fetch(`${SPRINKLR_API_BASE_URL}${SPRINKLR_API_URL}`, requestOptions)
}

const refreshSprinklrToken = async () => {
  return new Promise((resolve, reject) => {
    const refreshToken = fs.readFileSync('refresh-token.txt', 'utf8')
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    }

    const completeRefreshTokenUrl = `${SPRINKLR_API_BASE_URL}/${SPRINKLR_AUTH_URL}&redirect_uri=${SPRINKLR_REDIRECT_URI}&grant_type=refresh_token&refresh_token=${encodeURIComponent(
      refreshToken,
    )}`

    fetch(completeRefreshTokenUrl, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        if (data.error) reject(data.message)
        const accessToken = data.access_token
        fs.writeFileSync('refresh-token.txt', data.refresh_token, 'utf8')

        resolve(accessToken)
      })
      .catch(reject)
  })
}

module.exports = { getHeaders, sprinklrFormSubmission, refreshSprinklrToken }
