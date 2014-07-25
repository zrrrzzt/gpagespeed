var google = require('googleapis')
  , pagespeedonline = google.pagespeedonline('v1')
  , validUrl = require('valid-url')
  ;

module.exports = function(opts, callback){

  if(!opts.key && !opts.nokey){
    return callback(new Error('Missing required param: key'), null);
  }

  if(!opts.url){
    return callback(new Error('Missing required param: url'), null);
  }

  if(opts.url && !validUrl.isWebUri(opts.url)){
    return callback(new Error('Invalid url'), null);
  }

  pagespeedonline.pagespeedapi.runpagespeed(opts, function(error, req){
    if(error){
      return callback(error, null);
    }
    return callback(null, req);
  });
};