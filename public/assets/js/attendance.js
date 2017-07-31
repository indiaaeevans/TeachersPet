$(document).ready(function() {
  function getTeacher() {
    $.get('/api/teacher_data').then(function(teacher) {
      console.log(teacher);
      displayStudents(teacher.data);
    });
  }

  function displayStudents(teacher) {
    console.log(teacher);
    var id = teacher.id;
    $.get(`/api/students/${id}`).then(function(data) {
      console.log(data);
      // code to show data on the page
      for (var i = 0; i < data.length; i++) {
        var listItem = $('<li>');
        var studentInfo = data[i]['Students.name'];
        listItem.append(`<h2>${studentInfo}</h2>`);
        $('#append-here').append(listItem);
      }
    });
  }
  console.log('test');
  getTeacher();
});
