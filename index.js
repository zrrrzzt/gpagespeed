var google = require('googleapis');
var request = require('request');
var validUrl = require('valid-url');
var apiVersion;
var pagespeedUrl;
var pagespeedonline;

module.exports = function(options, callback) {

  if (!options.key && !options.nokey) {
    return callback(new Error('Missing required param: key'), null);
  }

  if (!options.url) {
    return callback(new Error('Missing required param: url'), null);
  }

  if (options.url && !validUrl.isWebUri(options.url)) {
    return callback(new Error('Invalid url'), null);
  }

  apiVersion = options.apiversion || 'v2';

  if (options.userequest) {
    pagespeedUrl = 'https://www.googleapis.com/pagespeedonline/' + apiVersion + '/runPagespeed';
    request(pagespeedUrl, {qs:options}, function(error, response, body) {
      if (error) {
        return callback(error, null);
      } else {
        return callback(null, body.toString());
      }
    })
  } else {
    pagespeedonline = google.pagespeedonline(apiVersion);
    pagespeedonline.pagespeedapi.runpagespeed(options, function(error, req) {
      if (error) {
        return callback(error, null);
      }
      return callback(null, req);
    });
  }
};