'use strict'; 

var app = require('express')();
var path = require('path');
var passport = require('passport');

var User = require('../api/users/user.model.js')

app.use(require('./session.middleware'));

app.use(require('./logging.middleware'));

app.use(require('./requestState.middleware'));

app.use(require('./statics.middleware'));

app.use(passport.initialize());
app.use(passport.session());

var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
passport.use(
  new GoogleStrategy({
    clientID: '732973626706-svps5slge4dltegkhvlc71pd6ckutl0t.apps.googleusercontent.com',
    clientSecret: 'ELDIwgga8xgW273IUQ7b2CUI',
    callbackURL: 'http://127.0.0.1:8080/auth/google/callback'
  },
  function(token, refreshToken, profile, done){
    console.log('---', 'in verification callback', profile, '---');
    User.create({
      email: profile.emails[0].value,
      google: {
        id: profile.id,
        token: token
      }
    }).then(function(user) {
      done(user)
    }).then(null, console.log)
  })
);

app.get('/auth/google', passport.authenticate('google', { scope:'email' }))
app.get('/auth/google/callback',
  passport.authenticate('google', {
    successRedirect: '/home',
    failureRedirect: '/'
  })
);

app.use('/login', require('./login'));
app.use('/signup', require('./signup'));
app.use('/logout', require('./logout'));
app.use('/currentUser', require('./currentUser'))


app.use('/api', require('../api/api.router'));

var validFrontendRoutes = ['/', '/stories', '/users', '/stories/:id', '/users/:id', '/signup', '/login'];
var indexPath = path.join(__dirname, '..', '..', 'public', 'index.html');
validFrontendRoutes.forEach(function (stateRoute) {
	app.get(stateRoute, function (req, res) {
		res.sendFile(indexPath);
	});
});



app.use(require('./error.middleware'));

module.exports = app;