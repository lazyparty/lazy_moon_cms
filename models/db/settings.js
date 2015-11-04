/**
 * Created by sszheng on 2015/11/04.
 * 创建数据库链接
 * 该模块只会被加载一次
 */

module.exports = {
	
	// debug 为 true 时，用户本地掉调试
	debug: false,
	session_secret: 'lazycms_secret', //务必修改
	auth_cookie_name: 'lazycms',
	encrypt_key: 'lazy',
	//数据库配置
	URL: 'mongodb://127.0.0.1:27017/lazycms',
	DB: 'lazycms',
	HOST: '',
	PORT: 27017,
	USERNAME: '',
	PASSWORD: '',


	//站点基础信息配置
	SITETITLE: 'lazy moon', //站点名称
	SITEDOMAIN: '', //站点域名
	SITEICP: '', //站点备案号
	SITEVERSION: 'v1.0.6', //静态资源版本戳
	SYSTEMMAIL: 'zhengshusheng14@126.com', //管理员个人邮箱
	UPDATEFOLDER: process.cwd()+'/public/upload', //默认上传文件夹本地路径
	TEMPSFOLDER: process.cwd()+'/views/web/temp', //默认模板文件夹本地路径
	DATAOPERATION: process.cwd()+'/models/db/bat', //数据库操作脚本目录
	DATABACKFORDER: '', //服务端数据库操作脚本目录
	CMSDISCRIPTION: 'lazy moon cms',
	SITEKEYWORDS: 'lazy moon cms',
	SITEBASICKEYWORDS: 'lazy moon cms',


	SYSTEMMANAGE: new Array('sysTemManage', 'LazyCMS后台管理'),  //后台模块（系统管理）
	ADMINUSERLIST: new Array('sysTemManage_user', '系统用户管理'),
	ADMINGROUPLIST: new Array('sysTemManage_uGroup', '系统用户组管理'),
	ADSLIST: new Array('sysTemManage_ads', '广告管理'),
	FILESLIST: new Array('sysTemManage_files', '文件管理'),
	DATAMANAGE: new Array('sysTemManage_data', '数据管理'),
	BACKUPDATA: new Array('sysTemManage_data_1', '数据备份'),
	SYSTEMLOGS: new Array('sysTemManage_logs', '操作日志'),


	CONTENTMANAGE: new Array('contentManage', '内容管理'), 
	CONTENTLIST: new Array('contentManage_content', '文档管理'),
	CONTENTCATEGORYS: new Array('contentManage_cateGory', '文档类别管理'),
	CONTENTTAGS: new Array('contentManage_tag', '文档标签管理'), //标签管理
	CONTENTTEMPS: new Array('contentManage_temp', '文档模板管理'),// 模板管理
	MESSAGEMANAGE: new Array('contentManage_msg', '留言管理'), // 留言管理
	
	USERMANAGE: new Array('userManage', '会员管理'), // 后台模块（会员管理）
	REGUSERSLIST: new Array('userManage_user', '注册用户管理'),

	//本地缓存设置
	redis_host: '127.0.0.1',
	redis_port: 6379,
	redis_psd: '',
	redis_db: 0,

	//邮件相关设置
	site_email: 'zhengshusheng14@126.com',
	site_email_psd: 'xxx',
	email_findPsd: 'findPsd',
	email_reg_active: 'reg_active',
	email_notice_contentMsg: 'notice_contentMsg',
	email_notice_contentBug: 'notice_contentBug',
	email_notice_user_contentMsg: 'notice_user_contentMsg',


	//信息提示相关
	system_illegal_param: '非法参数'
};



