var pagespeed = require('../index')
  , assert = require('assert')
  , url = 'http://www.google.com'
  , key = 'insert-your-API-key';

describe('PageSpeed', function(){

  it('Should throw error if API key is not supplied', function(done){
    var opts = {'url':url};
    pagespeed(opts, function(err, data){
      assert.throws(function(){
        if(err) throw err;
      });
      done();
    });
  });

  it('Should throw error if url is not supplied', function(done){
    var opts = {'key':key};
    pagespeed(opts, function(err, data){
      assert.throws(function(){
        if(err) throw err;
      });
      done();
    });
  });

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