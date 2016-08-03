var express = require('express');
   var bodyParser = require('body-parser');

   var app = express();

   var _ = require('underscore');

function allowCrossDomain(req, res, next) {
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');

  var origin = req.headers.origin;
  if (_.contains(app.get('allowed_origins'), origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }

  if (req.method === 'OPTIONS') {
    res.send(200);
  } else {
    next();
  }
}

    app.use(bodyParser.json({limit: '50mb'}));
    app.use(express.static('public'));

    app.use(allowCrossDomain);

    app.post('/blah', function(req, res, next) {

    var cope = req.body;
    console.log('request received:', req.body);

    //res.send('received the data.');
    });
    app.listen(8080);
