var pagespeed = require('../index')
  , assert = require('assert')
  , url = 'http://www.google.com'
  ;

describe('gpagespeed - outputs', function(){

  it('Should return data as JSON', function(done){
    var opts = {nokey:true, url:url};
    pagespeed(opts, function(err, data){
      if(err) throw err;
      var res = JSON.parse(data);
      assert.equal('pagespeedonline#result', res.kind);
      assert.equal(200, res.responseCode);
      done();
    });
  });

});