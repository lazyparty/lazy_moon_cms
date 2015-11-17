/***
 * Created by sszheng on 2015/11/17
 */

var adminFunc = {
	getClientI: function(req){
		return req.headers['x-forwarded-for'] ||
			req.connection.remoteAddress ||
			req.socket.remoteAddress ||
			req.connection.socket.remoteAddress;
	}
}
