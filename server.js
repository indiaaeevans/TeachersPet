'use strict';
var express = require('express');
var path = require('path');
var logger = require('morgan');
var apiRoutes = require('./routes/apiRoutes');
var htmlRoutes = require('./routes/htmlRoutes');
var bodyParser = require('body-parser');
// load environment variables into process.env
require('dotenv').config();

// Initialize app method
let app = express();
// set PORT variable
const PORT = 8080;

// Run Morgan for Logging
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// Static directory
app.use(express.static(path.join(__dirname, './public')));

require('./routes/htmlRoutes')(app);
require('./routes/apiRoutes')(app);

// intialize server to listen to port 8080
app.listen(PORT, function() {
  console.log(`You are now listening to ${PORT}`);
});
