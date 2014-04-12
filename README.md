#gpagespeed

Node.js module for analyzing a webpage with [Google PageSpeed Insights](https://developers.google.com/speed/docs/insights/v1/getting_started).

To use this you must Acquire an API key from [Google Developers Console](https://console.developers.google.com/)

##Installation##
```
$ npm install gpagespeed
```

##Test##

Update test/test.js with you API key

```
$ npm test
```

##Usage##

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