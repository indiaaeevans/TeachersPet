'use strict';
const express = require('express');
const path = require('path');
const logger = require('morgan');
const htmlRoutes = require('./routes/index.js');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
// load environment variables into process.env
require('dotenv').config();

// Initialize app method
let app = express();
// set PORT variable
const PORT = 8080;

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// Static directory
app.use(express.static(path.join(__dirname, './public')));

// parse application/x-www-form-urlencoded
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

// parse application/json
app.use(bodyParser.json());

// Override with POST having ?_method=DELETE
app.use(methodOverride('_method'));

// initialize htmlRoutes
app.use('/', htmlRoutes);

// intialize server to listen to port 8080
app.listen(PORT, function () {
  console.log(`You are now listening to ${PORT}`);
});

