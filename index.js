var request = require('request')
  , pagespeedUrl = 'https://www.googleapis.com/pagespeedonline/v1/runPagespeed';

module.exports = function(opts, callback){
  if(!opts.key && !opts.nokey){
    return callback(new Error('Missing required param: key'), null);
  }
  if(!opts.url){
    return callback(new Error('Missing required param: url'), null);
  }

  request(pagespeedUrl,{qs:opts}, function(error, res, body){
    if(error){
      return callback(error, null);
    }
    return callback(null, body.toString());
  });
};