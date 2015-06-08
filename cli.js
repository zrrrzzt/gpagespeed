#!/usr/bin/env node
'use strict';

var pagespeed = require('./index');
var pkg = require('./package.json');
var query = process.argv[2];
var argv = require('minimist')((process.argv.slice(2)));
var opts = {};

function printHelp() {
  console.log(pkg.description);
  console.log('');
  console.log('Usage:');
  console.log('  $ gpagespeed <url> --key=<key>');
  console.log('');
  console.log('Optional, supply other arguments.');
  console.log('See https://developers.google.com/speed/docs/insights/v1/getting_started');
  console.log('  $ gpagespeed <url> --key=<key> --callback=<callback> --prettyprint=<true> --userIp=<userIp> --locale=<locale> --strategy=<desktop|mobile>');
  console.log('You can also use request instead of googleapis and pick another version of the api');
  console.log('  $ gpagespeed <url> --key=<key> --userequest=true --apiversion=<versionstring>');
}

if (!query || process.argv.indexOf('-h') !== -1 || process.argv.indexOf('--help') !== -1) {
  printHelp();
  return;
}

if (process.argv.indexOf('-v') !== -1 || process.argv.indexOf('--version') !== -1) {
  console.log(pkg.version);
  return;
}

if (query.indexOf('http') !== -1) {
  opts.url = argv._[0];
}

if (!opts.url || (!argv.key && !argv.nokey)) {
  printHelp();
  return;
}

if (argv.url) {
  opts.url = argv.url;
}

if (argv.key) {
  opts.key = argv.key;
}

if (argv.callback) {
  opts.callback = argv.callback;
}

if (argv.prettyprint) {
  opts.prettyprint = argv.prettyprint;
}

if (argv.userIp) {
  opts.userIp = argv.userIp;
}

if (argv.locale) {
  opts.locale = argv.locale;
}

if (argv.strategy) {
  opts.strategy = argv.strategy;
}

if (argv.nokey) {
  opts.nokey = argv.nokey;
}

if (argv.userequest) {
  opts.userequest = argv.userequest;
}

if (argv.apiversion) {
  opts.apiversion = argv.apiversion;
}

pagespeed(opts, function(err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});