var express = require('express');
var router = express.Router();

var validator = require('validator');

var settings = require('../models/db/settings');

var adminFunc = require("../models/db/adminFunc");

var AdminGroup = require("../models/AdminGroup");
var AdminUser = require("../models/AdminUser");
var DbOpt = require("../models/Dbopt");
var SystemOptionLog = require("../models/SystemOptionLog");


var PW = require('png-word');
var RW = require('../util/randomWord');
var rw = RW('abcdefghijklmnopqrstuvwxyz1234567890');
var pngword = new PW(PW.GRAY);

/* GET admin listing. */
router.get('/', function(req, res, next) {
	res.render('manage/adminLogin', {title: settings.SITETITLE, description: 'lazy cms 后台管理登陆'});
});

router.get('/vnum', function(req, res) {
	var word = rw.random(4);
	req.session.vnum = word;
	pngword.createReadStream(word).pipe(res);
});

router.post('/doLogin', function(req, res, next){
	var username = req.body.username;
	var password = req.body.password;
	var vnum = req.body.vnum;
	var newPsd = DbOpt.encrypt(password, settings.encrypt_key);
	if(vnum != req.session.vnum) {
		res.end('验证码错误!');
	} else {
		if(validator.isUserName(username) && validator.isPsd(password)) {
			AdminUser.findOne({username:username, password:newPsd}, function(err, user){
				if(user) {
					//缓存权限
					AdminGroup.find({_id: user.group}, function(err, result){
						if(err) {
							console.log(err);
						} else {
							req.session.adminPower = result.power;
							req.session.adminlogined = true;
							req.session.adminUserInfo = user;
							//存入操作日志
							var loginLog = new SystemOptionLog();
							loginLog.type = 'login';
							loginLog.logs = user.username + '登陆, IP:' + adminFunc.getClientIp(req);
							loginLog.save(function(err){
								if(err){
									res.end(err);
								}
							});
							res.end("success");
						}
					});
				} else {
					console.log("登陆失败");
					res.end("用户名或密码错误");
				}
			});
		} else {
			res.end(setting.system_illegal_param)
		}
	}
});
module.exports = router;
