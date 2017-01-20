'use strict'

const google = require('googleapis')
const validUrl = require('valid-url')
const getResults = require('./lib/get-result')

module.exports = (options, callback) => {
  return new Promise((resolve, reject) => {
    if (!options.key && !options.nokey) {
      const error = new Error('Missing required param: key')
      if (callback) {
        return callback(error, null)
      }
      reject(error)
    }

    if (!options.url) {
      const error = new Error('Missing required param: url')
      if (callback) {
        return callback(error, null)
      }
      reject(error)
    }

    if (options.url && !validUrl.isWebUri(options.url)) {
      const error = new Error('Invalid url')
      if (callback) {
        return callback(error, null)
      }
      reject(error)
    }

    const apiVersion = options.apiversion || 'v2'

    if (options.useweb) {
      const pagespeedUrl = `https://www.googleapis.com/pagespeedonline/${apiVersion}/runPagespeed`
      getResults({apiUrl: pagespeedUrl, qs: options}, (error, data) => {
        if (error) {
          if (callback) {
            return callback(error, null)
          }
          reject(error)
        } else {
          if (callback) {
            return callback(null, data)
          }
          resolve(data)
        }
      })
    } else {
      const pagespeedonline = google.pagespeedonline(apiVersion)
      pagespeedonline.pagespeedapi.runpagespeed(options, (error, req) => {
        if (error) {
          if (callback) {
            return callback(error, null)
          }
          reject(error)
        } else {
          if (callback) {
            return callback(null, req)
          }
          resolve(req)
        }
      })
    }
  })
}
