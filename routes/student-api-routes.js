

// Requiring our student model
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {


	app.post("/api/students", function(req, res) {

		db.Students.create({
			firstName: req.body.firstName,
			lastName: req.body.lastName,
			email: req.body.email
			
		}).then(function(dbStudent) {
			res.json(dbStudent);
		});
	});


	app.get("/api/students", function(req, res) {

		db.Students.findAll({}).then(function(dbStudent){
		    console.log(dbStudent);
			res.json(dbStudent);

		});
	});
};