'use strict';

var router = require('express').Router(),
	_ = require('lodash');

var User = require('../api/users/user.model');

var session = require('express-session');

router.get('/', function (req, res, next) {
	if(req.session.user) {
		req.session.user = null;
		res.status(200).send();		
	} else {
		res.sendStatus(304);
	}
});

module.exports = router;
