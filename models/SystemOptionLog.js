/**
 * Created by sszheng on 2015/11/17
 * 系统日志操作
 */
var mongoose = require('mongoose');
var shortid = require('shortid');
var Schema = mongoose.Schema;



var systemOptionLog = new Schema({
	_id: {
		type: String,
		unique: true,
		'default': shortid.generate
	},
	type: String,
	date: { type: Date, default:Date.now },
	logs : String
});

var SystemOptionLog = mongoose.model("systemOptionLog", systemOptionLog);

module.exports = SystemOptionLog;

