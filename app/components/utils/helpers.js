var axios = require('axios');

var helpers = {
  getStudents: function() {
    return axios.get('/api/teachers/students').then(function(students) {
      return students;
    });
  }
};

module.exports = helpers;
