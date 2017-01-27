[![Build Status](https://travis-ci.org/zrrrzzt/gpagespeed.svg?branch=master)](https://travis-ci.org/zrrrzzt/gpagespeed)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

# gpagespeed

Node.js module for analyzing a webpage with [Google PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/).

You must acquire an API key from [Google Developers Console](https://console.developers.google.com/).

Supports promises and callback interface.

## Installation

From npm

```bash
$ npm i gpagespeed --save
```

## Usage

Pass an object with properties.

**url** and **key** are required, all other are optional.

You can see a list of all alternatives on the page for [Google PageSpeed standard query parameters](https://developers.google.com/speed/docs/insights/v2/reference/pagespeedapi/runpagespeed).

### Promises

```JavaScript
const pagespeed = require('gpagespeed')
const options = {
  url: 'http://url-to-check',
  key: 'insert-your-key'
}

pagespeed(options)
  .then((data) => {
    console.log(data)
  })
  .catch((error) => {
    console.error(error)
  })
```

### Callback

```JavaScript
const pagespeed = require('gpagespeed')
const options = {
  url: 'http://url-to-check',
  key: 'insert-your-key'
}

pagespeed(options, (error, data) => {
  if (error) {
    console.error(error)
  } else {
    console.log(data)
  }
})
```

## Alternative api

In addition you can choose to use https instead of googleapis and another version of the PageSpeed api (defaults to v2).

### Promises

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

### Callback
```JavaScript
const pagespeed = require('gpagespeed')
const options = {
  url: 'http://url-to-check',
  key: 'insert-your-key',
  useweb: true,
  apiversion: 'v3beta1'
}

pagespeed(options, (error, data) => {
  if (error) {
    console.error(error)
  } else {
    console.log(data)
  }
})
```

## Returns

[return-example.md](return-example.md)

## Related

- [gpagespeed-cli](https://github.com/zrrrzzt/gpagespeed-cli) CLI for this module

## License

[MIT](LICENSE)

![alt text](https://robots.kebabstudios.party/gpagespeed.png "Robohash image of gpagespeed")