#gpagespeed

Node.js module for analyzing a webpage with [Google PageSpeed Insights](https://developers.google.com/speed/docs/insights/v1/getting_started).

To use this you must Acquire an API key from [Google Developers Console](https://console.developers.google.com/)

##Installation##
```
$ npm install gpagespeed
```

##Test##

Make sure you have [Mocha](http://visionmedia.github.io/mocha/) installed globally or just do an npm install in gpagespeed.

Update test/test.js with you API key

```
$ npm test
```

##Usage##

Pass an object with properties.

**url** and **key** are required, all other are optional.

You can see a list of all alternatives on the page for [Google PageSpeed standard query parameters](https://developers.google.com/speed/docs/insights/v1/getting_started#st_params).

```javascript
var pagespeed = require('gpagespeed')
  , opts = {
    url: 'http://url-to-check',
    key: 'insert-your-key'
  };

pagespeed(opts, function(err, data){
  if(err) throw err;

  console.log(data);
});
```



##License##
MIT