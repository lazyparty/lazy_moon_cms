/**
 * Created by Administrator on 2015/4/18.
 */

var url = require('url');
//加密类
var crypto = require("crypto");
var mongoose = require('mongoose');
var shortid = require('shortid');
//站点配置
var settings = require("../models/db/settings");
var db = mongoose.connect('mongodb://localhost/lazycms');
//mongoose.connect('mongodb://'+settings.USERNAME+':'+settings.PASSWORD+'@'+settings.HOST+':'+settings.PORT+'/'+settings.DB+'');

//信息删除操作

var DbOpt = {
	encrypt: function(data, key) {
		var cipher = crypto.createCipher("bf", key);
		var newPsd = "";
		newPsd += cipher.update(data, 'utf8', 'hex');
		newPsd += cipher.final('hex');
		return newPsd;
	}

};



module.exports = DbOpt;
