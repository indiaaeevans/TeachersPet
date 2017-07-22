$("#add-student-btn").on("click", function(event) {
 location.href = "/addStudent";


  var newStudent = {
   
    firstName: $("#first-name").val().trim(),

    lastName: $("#last-name").val().trim(),

    email: $("#email").val().trim()
  };

  // send an AJAX POST-request with jQuery
  $.post("/api/students", newStudent)
    // on success, run this callback
    .done(function(data) {
      // log the data we found
      console.log(data);
      // tell the user we're adding a character with an alert window
      alert("Adding student...");
    });

  // empty each input box by replacing the value with an empty string
  $("#first-name").val("");
  $("#last-name").val("");
  $("#email").val("");

});