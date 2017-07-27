// $.getJSON("/api/students", function(response) {
//   // For each one
//   for (var i = 0; i < response.length; i++) {
//     // Display the apropos information on the page
//     // $(".articles").append("<p data-id='" + data[i]._id + "'>" + data[i].title + "<br />" + data[i].link + "</p>");
//     var img = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Placeholder_no_text.svg/150px-Placeholder_no_text.svg.png";
//     var firstName = response[i].firstName;
//     var lastName = response[i].lastName;
//     var email = response[i].email;
//     var imgUrl = response[i].imgUrl;

//     var fullName = firstName + " " + lastName;

//     console.log(fullName);

//     var student = "<li class='collection-item avatar'>" +
//       "<img src='" + imgUrl + "'alt='' class='circle selected-student' id='" + response[i].id + "'>" +  
//       "<p class='name selected-student' id='" + response[i].id + "'>" + fullName + "</p>" +
//       "<p class='email selected-student' id='" + response[i].id + "'>" + email + "</p>" +
//       "</li>";

//     $(".list-of-students").append(student);

//   }
// });


// $("#add-student-btn").on("click", function(event) {

//   var newStudent = {

//     firstName: $("#first-name").val().trim(),

//     lastName: $("#last-name").val().trim(),

//     imgUrl: $("#img-url").val().trim(),

//     email: $("#email").val().trim()
//   };

//   // send an AJAX POST-request with jQuery
//   $.post("/api/students", newStudent)
//     // on success, run this callback
//     .done(function(data) {
//       // log the data we found
//       console.log(data);

//       // tell the user we're adding a character with an alert window
//       alert("Adding student...");
//     });

//   // empty each input box by replacing the value with an empty string
//   $("#first-name").val("");
//   $("#last-name").val("");
//   $("#email").val("");
//   location.href = "/class";


// });

// //add student button
// $("#add-student-btn").on("click", function(event) {

//   var newStudent = {

//     firstName: $("#first-name").val().trim(),

//     lastName: $("#last-name").val().trim(),

//     imgUrl: $("#img-url").val().trim(),

//     email: $("#email").val().trim()
//   };

//   // send an AJAX POST-request with jQuery
//   $.post("/api/students", newStudent)
//     // on success, run this callback
//     .done(function(data) {
//       // log the data we found
//       console.log(data);

//       // tell the user we're adding a character with an alert window
//       alert("Adding student...");
//     });

//   // empty each input box by replacing the value with an empty string
//   $("#first-name").val("");
//   $("#last-name").val("");
//   $("#email").val("");
//   location.href = "/class";


// });



// // Whenever someone clicks a student
// $(document).on("click", ".selected-student", function() {
//   var thisId = $(this).attr("id");

//   console.log(thisId);

//    // Now make an ajax call for the Article
//     $.ajax({
//             method: "GET",
//             url: "/articles/" + thisId
//         })

// });
