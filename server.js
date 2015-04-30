var express = require("express"),
    app = express(),
    fs = require('fs'),
    bodyParser = require('body-parser'),
    errorHandler = require('errorhandler'),
    methodOverride = require('method-override'),
    colors = require('colors'),
    hostname = process.env.HOSTNAME || 'localhost',
    port = parseInt(process.env.PORT, 10) || 4567,
    basePath = __dirname,
    baseDir = '\\build';

for (var i = 0; i < process.argv.length; i++) {
  if (i == 2 && process.argv[i] != '--dir') break;
  if (i == 3) baseDir = '\\' + process.argv[i];
}

publicDir = basePath + baseDir;

app.use(function(req, res, next) {
  fs.stat(publicDir + req.url, function(err, stats) {
    req.isFile = stats && stats.isFile();
    next();
  });
});

app.get('*', function(req, res, next) {
  if (req.isFile) {
    next();
  } else {
    res.sendFile(publicDir + '/index.html');
  }
});

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

console.log("server listening on %s at http://%s:%s".cyan, baseDir, hostname, port);
app.listen(port, hostname);
