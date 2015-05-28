
/*-----------------------------------------------------------
 | SETTINGS
 |-----------------------------------------------------------
 |
 | Define your test routes below
 |
 */


/*
 * Require npm modules
 */
var express = require("express");
var app = express();
var fs = require('fs');
var bodyParser = require('body-parser');
var errorHandler = require('errorhandler');
var methodOverride = require('method-override');
var colors = require('colors');


/*
 * Initialize config variable
 */
var hostname = process.env.HOSTNAME || 'localhost',
    port = parseInt(process.env.PORT, 10) || 4567,
    basePath = __dirname,
    baseDir = '/build';


/*
 * Checks if server should listen on a sub directory
 */
for (var i = 0; i < process.argv.length; i++) {
  if (i == 2 && process.argv[i] != '--dir') break;
  if (i == 3) baseDir = '/' + process.argv[i];
}


/*
 * Set the base path
 */
var publicDir = basePath + baseDir;

app.use(function(req, res, next) {
  fs.stat(publicDir + req.url, function(err, stats) {
    req.isFile = stats && stats.isFile();
    next();
  });
});



/*-----------------------------------------------------------
 | ROUTES
 |-----------------------------------------------------------
 |
 | Define your test routes below
 |
 */


app.get('/api/generic', function (res, res, next) {
  
  // error response
  res.status(404);

  res.json({
    meta: {},
    data: {}
  });

  // response for node has been found
  /*res.json({
    meta: {
      type: 'page',
      title: 'Custom Page Title',
      description: 'This is the page description'
    },
    data: {
      'some': 1,
      'custom': 'data',
      'three': true
    }
  });*/
});



/*-----------------------------------------------------------
 | CONFIGURATION
 |-----------------------------------------------------------
 |
 | Below the server is configured
 |
 */


/*
 * Always serve index.html if requested file
 * could not be found
 */
app.get('*', function (req, res, next) {
  if (req.isFile) {
    next();
  } else {
    res.sendFile(publicDir + '/index.html');
  }
});


/*
 * Register middleware
 */
app.use(methodOverride());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static(publicDir));

app.use(errorHandler({
  dumpExceptions: true,
  showStack: true
}));


/*
 * Listen on specified port and directory
 */
console.log('server listening on %s at http://%s:%s'.cyan, baseDir, hostname, port);
app.listen(port, hostname);
