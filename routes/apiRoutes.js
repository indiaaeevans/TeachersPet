var db = require('../models');
const bodyParser = require('body-parser');

module.exports = function(app) {
  // parse application/json
  app.use(bodyParser.json());

  //route for retrieving all students
  app.get('/api/students/:id', function(req, res) {
    var id = req.params.id;
    db.Students
      .findAll({
        where: { TeacherId: id }
      })
      .then(function(results) {
        res.json(results);
      });
  });

  app.post('/api/students', function(req, res) {
    db.Students.create(req.body).then(function(students) {
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

  app.get('/api/attendance', function(req, res) {
    db.Dates
      .findAll({
        include: [
          {
            model: db.Attendance,
            include: [
              {
                model: db.Students
              }
            ]
          }
        ]
      })
      .then(function(currDate) {
        res.json(currDate);
      });
  });

  app.post('/api/attendance', function(req, res) {
    var currAttendance = req.body;
    console.log(req.body);
    var attendanceDate = currAttendance[0].attendanceDate;
    console.log(attendanceDate);
    var studentData = currAttendance[1];
    db.Dates
      .create({
        schoolDates: attendanceDate
      })
      .then(function(savedDate) {
        console.log(savedDate);
        for (var i = 0; i < studentData.length; i++) {
          db.Attendance
            .create({
              DateId: savedDate.id,
              StudentId: studentData[i].StudentId,
              presence: studentData[i].presence
            })
            .then(function(createdAttendance) {
              console.log(createdAttendance.dataValues);
            });
        }
        res.send(`sucessfully updated attendance for students for ${currAttendance[0].attendanceDate}`);
      });
  });
};
