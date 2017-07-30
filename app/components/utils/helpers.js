var axios = require('axios');

var helpers = {

  getStudents: function() {
    // first we need to get the teacher's id
    axios.get("/api/teacher_data").then(function(data) {
      var id = data.id;
      console.log("react is getting the teacher's id ", id);
      // then we can retrieve all students under this teacher
      axios.get('/api/students/' + id).then(function(students) {
        console.log(students);
        return students;
      });
    });
  }
};

module.exports = helpers;
