var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
//数据库操作对象
var DbOpt = require("../models/Dbopt");
// 文档对象
var Content = require("../models/Content");
//文章类别对象
var ContentCategory = require("../models/ContentCategory");
//短id
var shortid = require('shortid');
//校验
var validator = require("validator");
//时间格式化
var moment = require('moment');
//站点配置
var settings = require("../models/db/settings");
var siteFunc = require("../models/db/siteFunc");
var url = require('url');
//缓存
var cache = require('../util/cache');


/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('web/index', siteFunc.setDataForIndex(req, res, {'type': 'content'}, '首页'));

});


module.exports = router;
