const { google } = require('googleapis')
const validUrl = require('valid-url')
const getResults = require('./lib/get-result')

module.exports = options => {
  return new Promise(async (resolve, reject) => {
    if (!options.key && !options.nokey) {
      const error = new Error('Missing required param: key')
      return reject(error)
    }

    if (!options.url) {
      const error = new Error('Missing required param: url')
      return reject(error)
    }

    if (options.url && !validUrl.isWebUri(options.url)) {
      const error = new Error('Invalid url')
      return reject(error)
    }

    const apiVersion = options.apiversion || 'v4'

    if (options.useweb) {
      const pagespeedUrl = `https://www.googleapis.com/pagespeedonline/${apiVersion}/runPagespeed`
      try {
        const data = await getResults({ apiUrl: pagespeedUrl, qs: options })
        return resolve(data)
      } catch (error) {
        return reject(error)
      }
    } else {
      const pagespeedonline = google.pagespeedonline(apiVersion)
      try {
        const { data } = await pagespeedonline.pagespeedapi.runpagespeed(options)
        return resolve(data)
      } catch (error) {
        return reject(error)
      }
    }
  })
}
