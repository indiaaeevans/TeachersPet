const path = require('path');

// ROUTES FOR USER AUTHENTICATION 
module.exports = function (app, passport) {

  // These bring us to the main page with modals for sign up / sign in
  app.get('/signup', function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get('/signin', function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  // When new user signs up we will take them to class summary 
  // (redirect to sign up form if fails)
  app.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/class',
    failureRedirect: '/signup'
  }));

  // only authenticated users should see class summary
  app.get('/class', isLoggedIn, function (req, res) {
    res.sendFile(path.join(__dirname, "../public/classSummary.html"));
  });

  // only authenticated users should see assignments
  app.get('/assignments', isLoggedIn, function (req, res) {
    res.sendFile(path.join(__dirname, "../public/assignments.html"));
  });

  // only authenticated users should see attendance
  app.get('/attendance', isLoggedIn, function (req, res) {
    res.sendFile(path.join(__dirname, "../public/attendance.html"));
  });

    // only authenticated users should see schedule
  app.get('/schedule', isLoggedIn, function (req, res) {
    res.sendFile(path.join(__dirname, "../public/schedule.html"));
  });

    // only authenticated users should see documents
  app.get('/documents', isLoggedIn, function (req, res) {
    res.sendFile(path.join(__dirname, "../public/documents.html"));
  });

  // when user logs out, destory the session and redirect to home
  app.get('/logout', function (req, res) {
    req.session.destroy(function (err) {
      res.redirect('/');
    });
  });

  // When existing user signs in take them to class summary
  // (redirect to sign-in form if fails)
  app.post('/signin', passport.authenticate('local-signin', {
    successRedirect: '/class',
    failureRedirect: '/signin'
  }));

  // Route for getting some data about our user to be used client side
  // (HAVEN'T TESTED THIS YET, BASED OFF CLASS EXAMPLE)
  app.get("/api/user_data", function (req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's name
      res.json({
        name: req.user.name,
      });
    }
  });

  // custom middleware to protect routes after logging in
  function isLoggedIn(req, res, next) {

    if (req.isAuthenticated())
      return next();
    else res.redirect('/signin');
  }
}

