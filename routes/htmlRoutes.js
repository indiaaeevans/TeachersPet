<<<<<<< HEAD
// var express = require('express');

// module.exports = function (app) {
//   app.get('/', function (req, res) {
//     res.render('main');
//   });
// }
=======
var express = require('express');
var React = require('react'); 
var ReactDOMServer = require('react-dom/server'); 
var ReactApp = React.createFactory(require('../app/components/ReactApp.js').ReactApp);

module.exports = function (app) {

  app.get('/', function (req, res) {
    // React.renderToString takes your component and generates the markup 
    var reactHtml = ReactDOMServer.renderToString(ReactApp({})); 
    // output rendered by react 
    res.render('index', { reactOutput: reactHtml });
  });
}
>>>>>>> ecd90008261d468ffff50d55f991f181e6727fb0

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
