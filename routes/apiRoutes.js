var db = require('../models');
const bodyParser = require('body-parser');

module.exports = function(app) {
  // parse application/json
  app.use(bodyParser.json());

  app.post('/api/teachers/students', function(req, res) {
    var email = req.body.email;
    console.log(req.body);
    db.Teachers
      .findAll({
        where: {
          email: email
        },
        include: [
          {
            model: db.Students,
            include: [
              {
                model: db.Grades,
                include: [
                  {
                    model: db.Assignments
                  }
                ]
              }
            ]
          }
        ],
        raw: true
      })
      .then(function(student) {
        res.json(student);
      });
  });

  app.post('/api/students', function(req, res) {
    console.log(req.body);
    console.log(req.body.name);
    var firstName = req.body.firstName;
    var lastName = req.body.lastName;
    var email = req.body.email;
    var imgUrl = req.body.imgUrl;
    var name = firstName + ' ' + lastName;
    db.Students
      .create({
        name: name,
        email: email,
        imgUrl: imgUrl,
        TeacherId: 1
      })
      .then(function(students) {
        res.json(students);
      });
  });

  //route for retrieving all assignments
  app.get('/api/assignments', function(req, res) {
    db.Assignments.findAll({}).then(function(results) {
      res.json(results);
    });
  });

  // route for saving a new assignment
  app.post('/api/assignments', function(req, res) {
    db.Assignments
      .create({
        assignName: req.body.assignName
      })
      .then(function(assignment) {
        res.json(assignment);
      });
  });
};
