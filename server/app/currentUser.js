'use strict';

var router = require('express').Router(),
  _ = require('lodash');
var session = require('express-session');

router.get('/', function (req, res, next) {
  if(!req.session.user) res.sendStatus(401);
  else {
    res.status(200).send({user: req.session.user});   
  }

});

module.exports = router;


// router.post('/login', function (req, res, next) {
//  var email = req.body.email;
//  var password = req.body.password;
//  User.findOne({
//    email: email,
//    password: password
//  })
//  .exec()
//  .then(function (user) {
//    req.session.user = user;
//    res.status(200).send();
//  })
//  .then(null, function () {
//    res.status(401).send();
//  })
// });