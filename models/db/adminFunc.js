/***
 * Created by sszheng on 2015/11/17
 */
var url = require('url');
var settings = require('../settings');

var adminFunc = {
	siteInfos: function(description) {
		return {
			title: settings.SITETITLE,
			description: description
		}
	},

	getClientIp: function(req){
		return req.headers['x-forwarded-for'] ||
			req.connection.remoteAddress ||
			req.socket.remoteAddress ||
			req.connection.socket.remoteAddress;
	},

	setPageInfo: function(req, res, module, currentLink) {
		var searchKey = '';
		if(req.url) {
			var params = url.parse(req.url, true);
			searchKey = params.query.searchKey;
		}

		return {
			siteInfo: this.siteInfos(module[1]),
			bigCategory: module[0],
			searchKey: searchKey,
			currentLink: currentLink,
			layout: 'manage/public/adminTemp'
		}
	}
};

module.exports = adminFunc;
