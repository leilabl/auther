'use strict';

var router = require('express').Router(),
	_ = require('lodash');

var User = require('../api/users/user.model');

var session = require('express-session');

router.post('/', function (req, res, next) {
	var email = req.body.email;
	var password = req.body.password;
	User.findOne({
		email: email,
		password: password
	})
	.exec()
	.then(function (user) {
		if(!user) res.sendStatus(401);
		else {
			req.session.user = user;
			res.status(200).send({user: user});		
		}
	})
	.then(null, next)
});

module.exports = router;


// router.post('/login', function (req, res, next) {
// 	var email = req.body.email;
// 	var password = req.body.password;
// 	User.findOne({
// 		email: email,
// 		password: password
// 	})
// 	.exec()
// 	.then(function (user) {
// 		req.session.user = user;
// 		res.status(200).send();
// 	})
// 	.then(null, function () {
// 		res.status(401).send();
// 	})
// });