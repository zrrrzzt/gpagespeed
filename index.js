var google = require('googleapis');
var getResults = require('./lib/getResult');
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
    getResults({apiUrl:pagespeedUrl, qs:options}, function(error, data) {
      console.log('using https');
      if (error) {
        return callback(error, null);
      } else {
        return callback(null, data);
      }
    });
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