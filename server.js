'use strict';
const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

// Authentication dependencies
var passport = require('passport');
var session = require('express-session');
// var env = require('dotenv').load();

// Models for user login (uses sequelize right now but we want to convert to mongodb)
var db = require("./models/Teacher");

// load environment variables into process.env
require('dotenv').config();

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
    extended: false
  })
);

// parse application/json
app.use(bodyParser.json());

// Override with POST having ?_method=DELETE
app.use(methodOverride('_method'));

// Static directory
app.use(express.static(path.join(__dirname, './public')));

// do we need lines 5 and 6? 41-42 below seems to be the same
require('./routes/htmlRoutes')(app);
require('./routes/awsRoutes')(app);
// Authentication routes
var authRoute = require('./routes/authRoutes.js')(app, passport);

// load passport strategies
require('./app/config/passport/passport.js')(passport, db.Teacher);

// Sync Database
// db.sequelize.sync({force: false}).then(function() {
//     console.log('Database looks fine.')
// }).catch(function(err) {
//     console.log(err, "Something went wrong with the Database Update!")
// });

app.listen(PORT, function(err) {
    if (!err) console.log("Site is live. Now listening to port:", PORT);
    else console.log(err)
});

