'use strict'

const tap = require('tap')
const pagespeed = require('../../index')
const url = 'https://www.google.com'

tap.test('return data as JSON via googleapis', (test) => {
  const options = {nokey: true, url: url}
  pagespeed(options, (error, data) => {
    if (error) {
      throw error
    }
    tap.equal('pagespeedonline#result', data.kind, 'data ok')
    test.done()
  })
})

tap.test('return data as JSON via https', (test) => {
  const options = {nokey: true, url: url, useweb: true}
  pagespeed(options, (error, data) => {
    if (error) {
      throw error
    }
    tap.equal('pagespeedonline#result', data.kind, 'data ok')
    test.done()
  })
})
