// var express = require('express');

// module.exports = function (app) {
//   app.get('/', function (req, res) {
//     res.render('main');
//   });
// }

var path = require("path");
//imports the model, to use its database functions
var db = require("../models");
var express = require("express");
var router = express.Router();
// Routes
// =============================================================
module.exports = function(app) {

// Each of the below routes just handles the HTML page that the user gets sent to.

// index route loads view.html
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});
};
