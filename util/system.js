/**
 * Created by Administrator on 2015/4/18.
 */
//邮件发送插件
var nodemailer  = require("nodemailer");
//文件操作对象
var fs = require('fs');
//数据库操作对象
var DbOpt = require("../models/Dbopt");
//数据操作日志
var DataOptionLog = require("../models/DataOptionLog");
//时间格式化
var moment = require('moment');
//站点配置
var settings = require("../models/db/settings");
var siteFunc = require("../models/db/siteFunc");
//文件压缩
var fs = require('fs');
var child = require('child_process');
var archiver = require('archiver');
var system = {

};



module.exports = system;
