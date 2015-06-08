'use strict';

var assert = require('assert');
var gps = require('../index');

describe('gpagespeed - inputs', function() {

  it('Should throw if url is not specified', function(done) {

    var opts = {
      url:false,
      key:true
    };

    gps(opts, function(err, data) {
      assert.throws(function() {
          if (err) {
            throw err;
          } else {
            console.log(data);
          }
        }, function(err) {
          if ((err instanceof Error) && /Missing required param: url/.test(err)) {
            return true
          }
        },
        'Unexpected error'
      );
      done();
    });

  });

  it('Should throw if url is not valid', function(done) {

    var opts = {
      url:'pysje',
      key:true
    };

    gps(opts, function(err, data) {
      assert.throws(function() {
          if (err) {
            throw err;
          } else {
            console.log(data);
          }
        }, function(err) {
          if ((err instanceof Error) && /Invalid url/.test(err)) {
            return true
          }
        },
        'Unexpected error'
      );
      done();
    });

  });

  it('Should throw if key is not supplied', function(done) {

    var opts = {
      url:'https://www.npmjs.org',
      key:false
    };

    gps(opts, function(err, data) {
      assert.throws(function() {
          if (err) {
            throw err;
          } else {
            console.log(data);
          }
        }, function(err) {
          if ((err instanceof Error) && /Missing required param: key/.test(err)) {
            return true
          }
        },
        'Unexpected error'
      );
      done();
    });

  });

});
