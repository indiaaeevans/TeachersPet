var db = require('../models');
const bodyParser = require('body-parser');

module.exports = function (app) {
  // parse application/json
  app.use(bodyParser.json());
  
  app.get('/api/students', function (req, res) {

    db.Students.findAll({
      include: [{
        model: db.Grades,
        include: [{
          model: db.Assignments
        }]
      }],
      raw: true
    }).then(function (student) {
      res.json(student);
    });
  
  });

  app.post('/api/students', function (req, res) {
    // use localStorage to store TeacherId for multiple logins??
    // ask for ideas from group to dynamically set student to teacher
    console.log(req.body);
    console.log(req.body.name);  
    var firstName = req.body.firstName;
    var lastName = req.body.lastName;
    var email = req.body.email;
    var imgUrl = req.body.imgUrl;
    var name = firstName + " " + lastName;
    db.Students.create({
      name: name,
      email: email,
      imgUrl: imgUrl,
      TeacherId: 1
    }).then(function (students) {

      res.json(students);
    });
  });

  //route for retrieving all assignments
  app.get("/api/assignments", function(req, res) {
    db.Assignment.findAll({ }).then(function(results) { 
        res.json(results);
    });
  });

  // route for saving a new assignment
  app.post("/api/assignments", function(req, res){
    db.Assignment.create({
      assignName: req.body.assignName
    });
  });

}

