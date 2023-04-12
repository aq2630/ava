import fetch from 'node-fetch'
import { getUrl } from '../utils/serviceUrl'

export const waitingListSubmission = async (formData, hostName) => {
  const BASE_URL = getUrl(hostName, 'sprinklr')

  const raw = JSON.stringify({
    from: formData.email,
    subject: formData.subject,
    body: `Hi, Customer named ${
      formData.name
    } submitted the Waiting List Submission.</br> 
    ${Object.entries(formData)
      .map((e) => `${e[0]} : ${e[1]} `)
      .join('</br>')}`,
  })

  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: raw,
  }

  const responseData = await fetch(BASE_URL, requestOptions)
  return responseData
}
