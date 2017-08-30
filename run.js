const libxslt = require('libxslt');
const fs = require('fs');
const async = require('async');
const request = require('request');
const _ = require('lodash');

const donwload = (url, callback) => {
  request(url, (error, response, body) => callback(error, body));
};

async.autoInject({
  stylesheetString: [_.partial(fs.readFile, 'stylesheet/operation.xslt', 'utf8')],
  stylesheet: ['stylesheetString', libxslt.parse],
  page: [_.partial(donwload, 'https://developer.jamendo.com/v3.0/albums')],
  result: ['stylesheet', 'page', _.partial(_.invoke, _, 'apply')]
}, function(err, results) {
  if (err) {
    console.error(err);
  }
  console.log(results);
});
