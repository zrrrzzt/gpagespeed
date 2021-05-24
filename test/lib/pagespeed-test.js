const tap = require('tap')
const pagespeed = require('../../index')
const url = 'https://github.com'

tap.test('return data as JSON via googleapis', async test => {
  const options = { nokey: true, url: url }
  try {
    const data = await pagespeed(options)
    tap.equal('pagespeedonline#result', data.kind, 'data ok')
    return test.end()
  } catch (error) {
    console.error(error)
    throw error
  }
})
