var passport = require('passport'),
	LocalStrategy = require('passport-local').Strategy,
	mongoose = require('mongoose'),
	User = mongoose.model('User');

module.exports = function (app, config, restLogger) {
	passport.use(new LocalStrategy(
		function(username, password, done) {
			User.findOne({ username: username }, function (err, user) {
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
	passport.serializeUser(function(user, done) {
		done(null, user.id);
	});

	passport.deserializeUser(function(id, done) {
		User.findById(id, function(err, user) {
			done(err, user);
		});
	});
	app.use(passport.initialize());
	app.use(passport.session());
}