var db = require('../models');
const bodyParser = require('body-parser');

module.exports = function (app) {
  // parse application/json
  app.use(bodyParser.json());
  
  app.get('/api/students', function (req, res) {

    db.Students.findAll({
      include: [{
        model: db.Assignments,
        include: [db.Grades]
      }],
      raw: true
    }).then(function (students) {
      res.json(students);
    });

  });

  app.post('/api/students', function (req, res) {
    // use localStorage to store TeacherId for multiple logins??
    // ask for ideas from group to dynamically set student to teacher
    console.log(req.body);
    console.log(req.body.name);  
    var studentName = req.body.name;
    var studentEmail = req.body.email;
    // db.Students.create({
    //   name: studentName,
    //   email: studentEmail,
    //   TeacherId: 1
    // }).then(function (students) {

    //   res.json(students);
    // });
  });

}

