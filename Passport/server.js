var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;

app.use(express.static(__dirname + '/public'));

passport.use(new LocalStrategy(
	  function(username, password, done) {
		      User.findOne({ username: username }, function(err, user) {
			            if (err) { return done(err); }
			            if (!user) {
					            return done(null, false, { message: 'Incorrect username.' });
					          }
			            if (!user.validPassword(password)) {
					            return done(null, false, { message: 'Incorrect password.' });
					          }
			            return done(null, user);
			          });
		    }
));

app.get('/login', function(req, res, next) {
	  passport.authenticate('local', function(err, user, info) {
		      if (err) { return next(err); }
		      if (!user) { return res.redirect('/login'); }
		      req.logIn(user, function(err) {
			            if (err) { return next(err); }
			            return res.redirect('/users/' + user.username);
			          });
		    })(req, res, next);
});

// // Serve your app
console.log('Served: http://localhost:' + port);
app.listen(port);
