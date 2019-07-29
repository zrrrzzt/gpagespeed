const { google } = require('googleapis')
const validUrl = require('valid-url')
const getResults = require('./lib/get-result')

module.exports = async options => {
  if (!options.key && !options.nokey) {
    const error = new Error('Missing required param: key')
    throw error
  }

  if (!options.url) {
    const error = new Error('Missing required param: url')
    throw error
  }

  if (options.url && !validUrl.isWebUri(options.url)) {
    const error = new Error('Invalid url')
    throw error
  }

  const apiVersion = options.apiversion || 'v4'

  if (options.useweb) {
    const pagespeedUrl = `https://www.googleapis.com/pagespeedonline/${apiVersion}/runPagespeed`
    const data = await getResults({ apiUrl: pagespeedUrl, qs: options })
    return data
  } else {
    const pagespeedonline = google.pagespeedonline(apiVersion)
    const { data } = await pagespeedonline.pagespeedapi.runpagespeed(options)
    return data
  }
}
