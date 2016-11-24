var http = require('http'),
    path = require('path'),
    fs = require('fs'),
    express = require('express'),
    app = express(),
    port = 8080;

/* Load static */
app.use(express.static(path.join(__dirname, 'content')));

var server = http.Server(app);
var s = server.listen(port, function() {    
    console.log('[%s] server listening on port: ' + port, process.pid);
});
