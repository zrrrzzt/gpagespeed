var request = require('request')
  , util = require('util')
  , pagespeedUrl = 'https://www.googleapis.com/pagespeedonline/v1/runPagespeed';

module.exports = function(opts, callback){
  if(!opts.key){
    return callback(new Error('Missing required param: key'), null);
  }
  if(!opts.url){
    return callback(new Error('Missing required param: url'), null);
  }

  var uri = util.format('%s?url=%s&key=%s', pagespeedUrl, opts.url, opts.key);
  request(uri, function(error, res, body){
    if(error){
      return callback(error, null);
    }
    return callback(null, JSON.parse(body.toString()));
  });
};