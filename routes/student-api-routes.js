// Requiring our student model
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {


  app.post("/api/students", function(req, res) {

    db.Students.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      imgUrl: req.body.imgUrl

    }).then(function(dbStudent) {
      res.json(dbStudent);
    });
  });


  app.get("/api/students", function(req, res) {

    db.Students.findAll({}).then(function(dbStudent) {
      console.log(dbStudent);
      res.json(dbStudent);

    });
  });

  // Grab an student by it's ObjectId
app.get("api/students/:id", function(req, res) {
  // Using the id passed in the id parameter, prepare a query that finds the matching one in our db...
  db.Students.findAll({ "id": req.body.id }).then(function(dbStudent) {
      console.log(dbStudent);
      res.json(dbStudent);

    });
  // now, execute our query
  
});

};

