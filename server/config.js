const SPRINKLR_CLIENT_ID = 'qe969y7bzzbap649n52swcjt'
const SPRINKLR_CLIENT_SECRET =
  'GxsHqs5bHHgmpkrSp4DpuGcDgsnN8n9tu7tzWC2MHzFecfxbBkaDsxfxWedbgAhf'
const SPRINKLR_REDIRECT_URI = 'https://getjb.sa/'
const SPRINKLR_ACCOUNT_ID = 'happiness@getjb.sa'
const SPRINKLR_API_BASE_URL = `https://api2.sprinklr.com/prod2`
const SPRINKLR_API_URL = `/api/v2/email/create?aId=${SPRINKLR_ACCOUNT_ID}`
const SPRINKLR_AUTH_URL = `oauth/token?client_id=${SPRINKLR_CLIENT_ID}&client_secret=${SPRINKLR_CLIENT_SECRET}`

module.exports = {
  SPRINKLR_CLIENT_ID,
  SPRINKLR_CLIENT_SECRET,
  SPRINKLR_REDIRECT_URI,
  SPRINKLR_API_BASE_URL,
  SPRINKLR_API_URL,
  SPRINKLR_AUTH_URL,
}
