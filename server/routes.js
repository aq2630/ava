const fs = require('fs')
const { sprinklrFormSubmission, refreshSprinklrToken } = require('./utils')

module.exports = (app) => {
  // @route - post request to api/sprinklr
  // @description - creates a new entry in Sprinklr
  // @param from
  // @param subject
  // @param body
  app.post('/api/sprinklr', async (req, res) => {
    try {
      const initialResponse = await sprinklrFormSubmission(req)
      if (initialResponse.status === 401) {
        // calling this refresh token handler to get new tokens from spinklr
        const accessToken = await refreshSprinklrToken()
        fs.writeFileSync('sprinklr-token.txt', accessToken, 'utf8')
        const responseAfterRefreshToken = await sprinklrFormSubmission(req)
        const dataAfterRefreshToken = await responseAfterRefreshToken.text()
        if (dataAfterRefreshToken === 'SUCCESS') {
          res.status(200).send('ok')
        } else res.status(400).send('Error')
      } else {
        const initialResponseData = await initialResponse.text()

        if (initialResponseData === 'SUCCESS') {
          res.status(200).send('ok')
        } else res.status(400).send('Error')
      }
    } catch (error) {
      res.status(400).send(error.message)
    }
  })
}
