(async () => {
  const pagespeed = require('./index')
  const url = 'https://github.com'
  const options = { nokey: true, url: url, useweb: true }

  try {
    const data = await pagespeed(options)
    console.log(JSON.stringify(data, null, 2))
  } catch (error) {
    console.error(error)
  }
})()
