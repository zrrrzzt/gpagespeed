const https = require('https')
const querystring = require('querystring')

module.exports = options => {
  return new Promise((resolve, reject) => {
    let body = ''
    const url = `${options.apiUrl}?${querystring.stringify(options.qs)}`

    https.get(url, response => {
      response.on('data', (chunk) => {
        body += chunk.toString()
      })

      response.on('end', () => {
        return resolve(JSON.parse(body))
      })
    })
      .on('error', error => {
        return reject(error)
      })
  })
}
