'use strict';

function getResult(options, callback) {
  var https = require('https');
  var querystring = require('querystring');
  var apiEndpoint = options.apiUrl;
  var body = '';
  var url = apiEndpoint + '?';

  url = url + querystring.stringify(options.qs);

  https.get(url, function(res) {

    res.on('data', function(chunk) {
      body += chunk.toString();
    });

    res.on('end', function() {
      var json = JSON.parse(body);
      return callback(null, json);
    });

  }).on('error', function(error) {
    return callback(error, null);
  });

}

module.exports = getResult;
