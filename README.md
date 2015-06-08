[![Build Status](https://travis-ci.org/zrrrzzt/gpagespeed.svg?branch=master)](https://travis-ci.org/zrrrzzt/gpagespeed)
# gpagespeed

Node.js module/CLI app for analyzing a webpage with [Google PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/).

You must acquire an API key from [Google Developers Console](https://console.developers.google.com/).

If you want a nice formatted report try [psi](https://github.com/addyosmani/psi) by Addy Osmani.

## Installation

From npm

```sh
$ npm install gpagespeed
```

or globally for the CLI app

```sh
$ npm install gpagespeed -g
```

From GitHub

##Usage - Module

Pass an object with properties.

**url** and **key** are required, all other are optional.

You can see a list of all alternatives on the page for [Google PageSpeed standard query parameters](https://developers.google.com/speed/docs/insights/v2/reference/pagespeedapi/runpagespeed).

```javascript
var pagespeed = require('gpagespeed');
var options = {
  url: 'http://url-to-check',
  key: 'insert-your-key'
};

pagespeed(options, function(error, data) {
  if (error) {
    console.error(error);
  } else {
    console.log(data);
  }
});
```

In addition you can choose to use https instead of googleapis and another version of the PageSpeed api (defaults to v2).

```javascript
var pagespeed = require('gpagespeed')
  , options = {
    url: 'http://url-to-check',
    key: 'insert-your-key',
    useweb: true,
    apiversion: 'v3beta1'
  };

pagespeed(options, function(error, data) {
  if (error) {
    console.error(error);
  } else {
    console.log(data);
  }
});
```


##Usage - CLI

```
$ gpagespeed <url> --key=<key>
```

Optional params for result. You can see a list of all alternatives on the page for [Google PageSpeed standard query parameters](https://developers.google.com/speed/docs/insights/v1/getting_started#st_params).

```
$ gpagespeed <url> --key=<key> filter_third_party_resources=<boolean> --locale=<locale> --rule=<rule> --screenshot=<boolean> --strategy=<desktop|mobile>
```

In addition you can use flags to select another version of the api (defaults to v2) and to use request instead of googlapis.

```
$ gpagespeed <url> --key=<key> --useweb=true --apiversion=<versionstring>
```


##License
MIT