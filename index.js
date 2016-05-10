// Load required modules
var express = require('express');
var parser = require('body-parser');

// Create the application object
var myapp = express();

// Tell the app where the views live, and what engine should render them.
myapp.set('views', './views');
myapp.set('view engine', 'pug');

// Tell the app to use the static server to serve files in the CSS directory.
myapp.use(express.static('css'));

// Tell the app about the main view.
myapp.route('/', function(req, res) {
  res.render('index.pug');
});

// Tell the app how to render views from links.
myapp.use(function(req, res, next) {
  res.render(req.path.slice(1));
});

// Start listening for requests
myapp.listen(3000, function() {
  console.log('Now listening on port 3000');
});
