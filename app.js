
/*引用模块*/
var express = require('express');
var session = require('express-session');
var mongoose = require('mongoose');
var RedisStore = require('connect-redis')(session);
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var compression = require('compression');
var routes = require('./routes/index');
debugger;
var users = require('./routes/users');
var admin = require('./routes/admin');
var content = require('./routes/content');

var validat = require('./routes/validat');
//系统功能支持
var system = require('./routes/system');

//站点配置
var settings = require("./models/db/settings");
var siteFunc = require("./models/db/siteFunc");

var fs = require('fs');
//时间格式化
var moment = require('moment');
var filter = require('./util/filter');

//模板引擎
var partials = require('express-partials');


var app = express();

//ueditor注册
var ueditor = require('ueditor-nodejs');
app.use('/ueditor/ue', ueditor({
	configFile: '/ueditor/jsp/config.json',
	mode: 'local',
	accessKey: '',
	secrectKey: '',
	staticPath: path.join(__dirname, 'public'),
	dynamicPath: '/blogpicture'
}));


// view engine setup
// 静态压缩
app.use(compression());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(partials());

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json({limit: '50mb'}));  //限制上传
app.use(bodyParser.urlencoded({ extended: false, limit: '50mb' }));
app.use(cookieParser(settings.session_secret));
//解决一部层次混乱问题
app.use(require('express-promise')());


app.use(session({
	secret: settings.session_secret,
	store: new RedisStore({
		port: settings.redis_port,
		host: settings.redis_host,
		pass: settings.redis_psd,
		ttl: 1800 //过期时间
	}),
	resave: true,
	saveUninitialized: true
}));

app.use(filter.authUser); //应该是一个函数，根据req,res做用户验证等功能

app.use(function(req, res, next){
	//针对注册会员
	res.locals.logined = req.session.logined;
	res.locals.userInfo = req.session.user;
	//针对管理员
	res.locals.adminlogined = req.session.adminlogined;
	res.locals.adminUserInfo = req.session.adminUserInfo;
	//制定站点域名
	res.locals.myDomain = req.headers.host;

	next();
});


//配置站点地图和robots抓取
app.get('/sitemap.xml', function(req, res, next) {
	
	siteFunc.setDataForSiteMap(req, res);

});

app.get('/robots.txt', function(req, res, next) {
	var stream=fs.createReadStream('./robots.txt', {flags:'r'});
	stream.pipe(res);
});


//数据可视化
app.locals.myDateFormat = function(date){
	moment.locale('zh-cn');
	return moment(date).startOf('hour').fromNow();
};


app.use(express.static(path.join(__dirname, 'public')));

//制定路由控制
app.use('/admin', validat);
app.use('/admin', admin);
app.use('/users', users);
app.use('/', routes);
app.use('/content', content);
app.use('/system', system);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  console.log(err);
  res.render('web/public/do404', siteFunc.setDataForError(req, res, '找不到页面', err.message));
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('web/public/do500', siteFunc.setDataForError(req, res, '出错啦！', err.message));
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('web/public/do500', siteFunc.setDataForError(req, res, '出错啦！', err.message)); 
});






module.exports = app;
