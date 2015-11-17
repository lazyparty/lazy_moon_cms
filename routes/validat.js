/***
 *Created by sszheng on 2015/11/17
 *对权限进行控制
 */
var express = require('express');
var router = express.Router();

var validator = require("validator");
function isAdminLogined(req) {
	return req.session.adminlogined;
}

router.get("/manage", function(req, res, next) {
	if(isAdminLogined(req)){
		next();
	} else {
		res.redirect("/admin");
	}
});

router.get("/manage/:defaultUrl", function(req, res, next) {
	if(isAdminLogined(req)) {
		next();
	} else {
		res.redirect("/admin");
	}
});

validator.extend("isUserName", function(str) {
	return /^[a-zA-Z][a-zA-Z0-9_]{3,11}$/.test(str); 
});

validator.extend("isPsd", function(str){
	return /(?!^\\d+$)(?!^[a-zA-Z]+$)(?!^[_#@]+$).{5,}/.test(str);
});


module.exports = router;
