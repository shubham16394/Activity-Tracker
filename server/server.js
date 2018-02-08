var express = require('express');
var path = require('path');
var http = require('http');
var app = express();
var bodyParser = require('body-parser');
var api = require('./server/routes/api');
var mongoose = require('mongoose');
var fs = require('fs');


var PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'dist')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api', api);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});


mongoose.connect('mongodb://localhost/track_activity')

//load all files in models dir
fs.readdirSync(__dirname + '/models').forEach(function(filename) {
  if (~filename.indexOf('.js')) require(__dirname + '/models/' + filename)
});


app.set('port', PORT);

app.listen(PORT, function() {
    console.log('Server listening on ' + PORT);
});
