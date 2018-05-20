const tap = require('tap')
const gps = require('../../index')

tap.test('it requires url to exist', (test) => {
  const options = {
    url: false,
    key: true
  }
  const expectedErrorMessage = 'Missing required param: url'

  gps(options)
    .then(data => {
      console.log(data)
    })
    .catch((error) => {
      tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
      test.done()
    })
})

tap.test('it requires url to be valid', (test) => {
  const options = {
    url: 'pysje',
    key: true
  }
  const expectedErrorMessage = 'Invalid url'

  gps(options)
    .then(data => {
      console.log(data)
    })
    .catch((error) => {
      tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
      test.done()
    })
})

tap.test('it requires a key', (test) => {
  const options = {
    url: 'https://www.npmjs.org',
    key: false
  }
  const expectedErrorMessage = 'Missing required param: key'

  gps(options)
    .then(data => {
      console.log(data)
    })
    .catch((error) => {
      tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
      test.done()
    })
})
