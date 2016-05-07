// Load required modules
var express = require('express');
var parser = require('body-parser');

// Create the application object
var myapp = express();

myapp.use(express.static('css'));

myapp.route('/', function(req, res) {
  res.render('index.pug');
});

myapp.use(function(req, res, next) {
  res.render(req.path.slice(1));
});

// Start listening for requests
myapp.listen(3000, function() {
  console.log('Now listening on port 3000');
});
