'use strict'

const https = require('https')
const querystring = require('querystring')

module.exports = (options, callback) => {
  let body = ''
  const url = `${options.apiUrl}?${querystring.stringify(options.qs)}`

  https.get(url, (response) => {
    response.on('data', (chunk) => {
      body += chunk.toString()
    })

    response.on('end', () => {
      return callback(null, JSON.parse(body))
    })
  })
    .on('error', (error) => {
      return callback(error, null)
    })
}
