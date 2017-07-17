'use strict';
const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
// Authentication dependencies
var passport = require('passport');
var session = require('express-session');

// Models
var db = require("./models");

// Initialize app method
let app = express();
// set PORT variable
const PORT = process.env.PORT || 8080;

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// For Passport
app.use(session({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true
})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

// parse application/json
app.use(bodyParser.json());

// Override with POST having ?_method=DELETE
app.use(methodOverride('_method'));

// Static directory
app.use(express.static(path.join(__dirname, './public')));

// ROUTES
require('./routes/htmlRoutes')(app);
require('./routes/awsRoutes')(app);
// Authentication routes
require('./routes/authRoutes.js')(app, passport);
// load passport strategies
require('./app/config/passport/passport.js')(passport, db.Teacher);

db.sequelize.sync().then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});
