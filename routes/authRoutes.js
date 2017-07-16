// ROUTES FOR USER AUTHENTICATION 
module.exports = function (app, passport) {

  // These bring us to the main page with modals for sign up / sign in
  app.get('/signup', function (req, res) {
    res.sendFile(path.join(__dirname, "../views/index.html"));
  });

  app.get('/signin', function (req, res) {
    res.sendFile(path.join(__dirname, "../views/index.html"));
  });

  // When new user signs up we will take them to main menu 
  // (redirect to sign up form if fails)
  app.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/menu',
    failureRedirect: '/signup'
  }));

  // only authenticated users should see menu
  app.get('/menu', isLoggedIn, function (req, res) {
    res.sendFile(path.join(__dirname, "../views/menu.html"));
  });

  // when user logs out, destory the session and redirect to home
  app.get('/logout', function (req, res) {
    req.session.destroy(function (err) {
      res.redirect('/');
    });
  });

  // When existing user signs in take them to main menu
  // (redirect to sign-in form if fails)
  app.post('/signin', passport.authenticate('local-signin', {
    successRedirect: '/menu',
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

  // custom middleware to protect menu route
  function isLoggedIn(req, res, next) {

    if (req.isAuthenticated())
      return next();
    else res.redirect('/signin');
  }
}
