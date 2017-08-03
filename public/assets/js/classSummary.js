$(document).ready(function() {
  // store logged in teacher's id and name
  var id, teacherName, studentId;  
  
  $.get("/api/teacher_data", function(data) {
    var teacherName = data.name;
    id = data.id;
    $("#teacher-name").text(teacherName + "'s");
  });
  
  // initialize materialize
  $(".modal").modal();
  $(".button-collapse ").sideNav();
  $(".button-collapse").sideNav("hide");
  $(".dropdown-button").dropdown();

  // date picker for events modal
  $(".datepicker").pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15, // Creates a dropdown of 15 years to control year,
    today: "Today",
    clear: "Clear",
    close: "Ok",
    closeOnSelect: false // Close upon selecting a date,
  });

  // add student to the class
  $("#add-student-btn").on("click", function(event) {
    var newStudent = {
      name: $("#first-name").val().trim() + " " + $("#last-name").val().trim(),
      imgUrl: $("#img-url").val().trim(),
      email: $("#email").val().trim(),
      TeacherId: id
    };

    $.post("/api/students", newStudent)
      // on success, run this callback
      .done(function(data) {
        alert("Adding student...");
      });

    // empty each input box by replacing the value with an empty string
    $("#first-name").val("");
    $("#last-name").val("");
    $("#email").val("");
    location.href = "/class";
  });

  $("#submit-doc-btn").on("click", function(event) {
    event.preventDefault();
    var formData = new FormData();
    formData.append("pdf", $("input[type=file]")[0].files[0]);
    $.ajax({
      url: "/api/upload",
      type: "POST",
      data: formData,
      processData: false,
      contentType: false
    }).then(function(uploadDoc) {
      console.log(uploadDoc);
      //need to render get request to AWS for temp embedded urls to display persisted documents
      console.log("document has successfully uploaded");
      location.href = "/class";
    });
  });

  $.get("/api/upload").then(function(data) {
    for (var i = 0; i < data.length; i++) {
      var newDocument = `<li> <a href=${data[i].url} target="_blank">${data[i]
        .key}</a></li>`;
      $("#append-urls-here").append(newDocument);
    }
  });

  // --------- add event------------
  $("#submit-event-btn").on("click", function(event) {
    var newEvent = {
      eventName: $("#event-name").val().trim(),
      eventDate: $("#event-date").val().trim(),
      TeacherId: id
    };
    // send an AJAX POST-request with jQuery
    $.post("/api/events", newEvent)
      // on success, run this callback
      .done(function(data) {
        alert("Adding event...");
      });

    // empty each input box by replacing the value with an empty string
    var theDate = $("#event-date").val().trim();
    console.log("this is the date" + theDate);

    alert(theDate);
  });

  //---------pop-up modal with student summary---------------
  $(document).on("click", ".listed-student", function() {
    studentId = $(this).attr("id");
    $.ajax({
      // get the student that was clicked
      url: "/api/students/" + id + "/" + studentId,
      method: "GET"
    })
    .done(function(data) {

      var imgUrl = data.imgUrl;
      var studentName = data.name;
      var studentEmail = data.email;

      // add student information to modal
      $(".pic-row").html("<img class='modal-img' src='" + imgUrl + "'>");
      $(".name-row").html("<h2>" + studentName + "</h2>");
      $(".email-row").html("<h5>" + studentEmail + "</h5>");
    });

  // Count absent

    $.get(`/api/absent/${studentId}`).then(function(data) {
      // code to show data on the page
      $(".absent-row").html("<h5> Days Absent: " + data + "</h5>");

      // grabbing email info
      var email = $(".email-row").text();
      var name = $(".name-row").text();

      // email student after clicking "email-btn"
      $(document).on("click", ".email-btn", function() {
        var link = "mailto:" + email +
          "?Subject=" + "Class Notice for " + name +
          "&body=" + "Hi " + name + ",";

        window.location.href = link;
      })

    });

    // open modal
    $("#student-summary-modal").modal("open");
  });

  // ====================================================

  // get all assignments and put in a dropdown form
        $.get("/api/assignments").then(assignmentSelect(data));

        function assignmentSelect(data){
            for (var i = 0; i < data.length; i++){
                var option = $("<option>");
                option.text(data[i].assignName);
                option.attr("data-id", data[i].id);
                $("#assignments-select").append(option);
            }
        }

        $('#add-grade').on('click', function(event) {
            event.preventDefault();
            // get the assignment id from the selected option
            var assignmentId = $("#assignments-select option:selected").data("id");
            var grade = $("#grade-input").val();
            // check that the form is filled out
            if ($("#assignments-select").val() == 0 | grade == 0 ) {
                alert("Please fill both required fields");
                return;
            } 
            else {
                postGrade(grade, assignmentId);
            }
        });


        function postGrade(grade, assignment) {
            studentId = 1;
            // new object to post to the database
            var newGrade = {
                assignmentId: assignment,
                studentId: studentId,
                grade: grade
            }

            // send an AJAX POST-request with the new grade
            $.post("/api/grades/:id", newGrade).done(function(data) { 
                console.log("new grade posted:", newGrade);
                location.href = '/grades';
            });
        }

});