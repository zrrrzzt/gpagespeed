[![Build Status](https://travis-ci.org/zrrrzzt/gpagespeed.svg?branch=master)](https://travis-ci.org/zrrrzzt/gpagespeed)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

# gpagespeed

Node.js module for analyzing a webpage with [Google PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/).

You must acquire an API key from [Google Developers Console](https://console.developers.google.com/).

## Usage

Pass an object with properties.

**url** and **key** are required, all other are optional.

You can see a list of all alternatives on the page for [Google PageSpeed standard query parameters](https://developers.google.com/speed/docs/insights/v4/reference/pagespeedapi/runpagespeed).

```JavaScript
const pagespeed = require('gpagespeed')
const options = {
  url: 'http://url-to-check',
  key: 'insert-your-key'
}

pagespeed(options)
  .then(data => {
    console.log(data)
  })
  .catch(error => {
    console.error(error)
  })
```

## Alternative api

In addition you can choose to use https instead of googleapis and another version of the PageSpeed api (defaults to v4).

```JavaScript
const pagespeed = require('gpagespeed')
const options = {
  url: 'http://url-to-check',
  key: 'insert-your-key',
  useweb: true,
  apiversion: 'v3beta1'
}

pagespeed(options)
  .then((data) => {
    console.log(data)
  })
  .catch((error) => {
    console.error(error)
  })
```
## Returns

[return-example.md](return-example.md)

## Related

- [gpagespeed-cli](https://github.com/zrrrzzt/gpagespeed-cli) CLI for this module

## License

[MIT](LICENSE)

![Robohash image of gpagespeed](https://robots.kebabstudios.party/gpagespeed.png "Robohash image of gpagespeed")