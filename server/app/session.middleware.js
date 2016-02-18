'use strict';

var express = require('express'),
	router = express.Router();

var session = require('express-session');

router.use(session({
    // this mandatory configuration ensures that session IDs are not predictable
    secret: 'tongiscool'
}));

router.use(function (req, res, next) {
  console.log('session', req.session);
  next();
});

module.exports = router;
