$(function() {

    var displayname = "test";
    //--------------------------------------------------
    // This runs when a new user signs up
    //--------------------------------------------------
    $("#signupbutton").on("click", function(event) {
        
        event.preventDefault();

        // check if all fields are filled
        if ( $("input.newuser").val() ) {

            var userEmail = $("#newemailinput").val().trim();
            var userPassword = $("#newpasswordinput").val().trim();
            var userName = $("#newnameinput").val().trim();

            // This will create a new object to go into the database
            var newUser = {
                name: userName,
                email: userEmail,
                password: userPassword,
            };

            console.log(newUser);
            
            // send to the database
            $.post("/api/signup", newUser, function() {

                displayname = newUser.name + "\'s";

                alert(displayname + "Teacher profile has been added to the database!");                
                

            }).fail(function(data) {

                alert("There was an error creating your user profile.");

            });


        } else {
            $(".alertUser").text("Please fill all required fields.");
        }
    
    });
});