var express = require('express');

var app = express();

var resoftware = /\w\/(\d\.?)+ .*( \(.*\))/;

app.get('/', function(req, res) {
    
    res.json({
        ipaddress: req.headers['x-forwarded-for'],
        language: req.headers['accept-language'],
        software: req.headers['user-agent'].match(/\w+\/[\d+\.?]+(?:\s\(([^\)]*)\))/)[1]
        });
});

app.listen(process.env.PORT || 8080, function () {
  console.log('browserheader app listening on port 8080!')
});