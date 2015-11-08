/**
 * Created by Administrator on 2015/5/30.
 */
// 文档对象
var Content = require("../Content");
//文章类别对象
var ContentCategory = require("../ContentCategory");
//文章标签对象
var ContentTags = require("../ContentTags");
//广告对象
var Ads = require("../Ads");
//留言对象
var Message = require("../Message");
var settings = require("./settings");
//数据库操作对象
var DbOpt = require("../Dbopt");
//时间格式化
var moment = require('moment');
//缓存
var cache = require('../../util/cache');
function isLogined(req) {
    return req.session.logined;
}

var siteFunc = {


};
module.exports = siteFunc;
