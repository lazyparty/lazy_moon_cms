var express = require('express');
var router = express.Router();

var settings = require('../models/db/settings');

/* GET admin listing. */
router.get('/', function(req, res, next) {
	debugger;
	res.render('manage/adminLogin', {title: settings.SITETITLE, description: 'lazy cms 后台管理登陆'});
});

module.exports = router;
