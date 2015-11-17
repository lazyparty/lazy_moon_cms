/**
 * Created by sszheng on 2015/11/17
 */

var mongoose = require('mongoose');
var shortid = require('shortid');
var Schema = mongoose.Schema;


var adminGroup = new Schema({
	_id: {
		type: String,
		unique: true,
		'default': shortid.generate
	},
	name: String,
	power: String,
	date: { type: Date, default: Date.now },
	comments: String
});

var AdminGroup = mongoose.model('AdminGroup', adminGroup);

module.exports = AdminGroup;


