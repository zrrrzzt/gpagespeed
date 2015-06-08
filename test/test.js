var pagespeed = require('../index');
var assert = require('assert');
var url = 'http://www.google.com';

describe('gpagespeed - outputs', function() {

  it('Should return data as JSON via googleapis', function(done) {
    var opts = {nokey:true, url:url};
    pagespeed(opts, function(err, data) {
      if (err) {
        throw err;
      }
      assert.equal('pagespeedonline#result', data.kind);
      assert.equal(200, data.responseCode);
      done();
    });
  });

  it('Should return data as JSON via https', function(done) {
    var opts = {nokey:true, url:url, useweb:true};
    pagespeed(opts, function(err, data) {
      if (err) {
        throw err;
      }
      assert.equal('pagespeedonline#result', data.kind);
      assert.equal(200, data.responseCode);
      done();
    });
  });

});