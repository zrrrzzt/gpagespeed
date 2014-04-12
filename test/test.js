var pagespeed = require('../index')
  , assert = require('assert')
  , url = 'http://insert.your.url'
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
    var opts = {key:key, url:url};
    pagespeed(opts, function(err, data){
      if(err) throw err;
      assert.equal('pagespeedonline#result', data.kind);
      assert.equal(200, data.responseCode);
      done();
    });
  });

});