'use strict';

var router = require('express').Router();
var session = require('express-session');

var User = require('../api/users/user.model');

router.post('/', function (req, res, next) {
  console.log('received request');
  var email = req.body.email;
  var password = req.body.password;
  User.create({
    email: email,
    password: password
  })
  .then(function(user) {
    if (!user) res.sendStatus(401);
    else {
      req.session.user = user;
      res.status(200).send({user: user});   
    }
  })
  .then(null, next)
});

module.exports = router;