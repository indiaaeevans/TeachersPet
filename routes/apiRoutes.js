module.exports = function (app) {

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

}
