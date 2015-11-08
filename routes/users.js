var express = require('express');
var router = express.Router();
var url = require('url');
//验证
var validator = require("validator");
//文章类别对象
var ContentCategory = require("../models/ContentCategory");
//用户实体类
var User = require("../models/User");
//留言实体类
var Message = require("../models/Message");
// 文档对象
var Content = require("../models/Content");
//数据库操作对象
var DbOpt = require("../models/Dbopt");
//加密类
var crypto = require("crypto");
//系统相关操作
var system = require("../util/system");
//时间格式化
var moment = require('moment');
//站点配置
var settings = require("../models/db/settings");
var siteFunc = require("../models/db/siteFunc");
var shortid = require('shortid');
//数据校验
var filter = require('../util/filter');



module.exports = router;
