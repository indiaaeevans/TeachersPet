var axios = require('axios'); 

var helpers = {

  getStudents: function () {
    return axios.get('/api/students')
      .then(function (students) {
        return students; 
      });
  }
}

module.exports = helpers; 

