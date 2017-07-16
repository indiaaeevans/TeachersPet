'use strict';
var express = require('express');
var path = require('path');
var logger = require('morgan');
var apiRoutes = require('./routes/apiRoutes');
var htmlRoutes = require('./routes/htmlRoutes');
var bodyParser = require('body-parser');
// Authentication dependencies
var passport = require('passport');
var session = require('express-session');
// var env = require('dotenv').load();

// Models for user login (uses sequelize right now but we want to convert to mongodb)
var db = require("./app/models-seq/");

// load environment variables into process.env
require('dotenv').config();

// Initialize app method
let app = express();
// set PORT variable
const PORT = process.env.PORT || 8080;

// Run Morgan for Logging
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// For Passport
app.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true
})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

// Static directory
app.use(express.static(path.join(__dirname, './public')));

// do we need lines 5 and 6? 41-42 below seems to be the same
require('./routes/htmlRoutes')(app);
require('./routes/apiRoutes')(app);
// Authentication routes
var authRoute = require('./routes/authRoutes.js')(app, passport);

// load passport strategies
require('./app/config/passport/passport.js')(passport, db.User);

// Sync Database
db.sequelize.sync({force: false}).then(function() {
    console.log('Database looks fine.')
}).catch(function(err) {
    console.log(err, "Something went wrong with the Database Update!")
});

app.listen(PORT, function(err) {
    if (!err) console.log("Site is live.");
    else console.log(err)
});
