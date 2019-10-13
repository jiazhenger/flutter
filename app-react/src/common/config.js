/* ====================================== api 配置  ====================================== */
const env = process.env.NODE_ENV === 'development';	// 是否为开发环境

let api;
const _Api = 'http://napi.ubzyw.com/';				// 正式访问 api
const _Apt = 'https://testapi.ubzyw.com/';			// 测试访问 api
const _App = 'http://prem.ubzyw.com/';			// 预发布 api

if(env){ // 开发环境
//	api = 'http://192.168.3.104:8185/'
	api = _Apt;
//	api = 'http://192.168.5.185:9000/'
}else{ // 生产环境
	if (window.location.host.indexOf('testh5s.ubzyw.com') >= 0) {	 		// 测试环境
        api = _Apt
    } else if(window.location.host.indexOf('preh5.ubzyw.com') >= 0) {	 	// 预发布环境
    	api = _App
    }else{
    	api = _Api	 // 正式环境
    }
}
/* ====================================== 全局变量配置  ====================================== */
module.exports = {
	api : api,
	// 缓存配置
	pageSize:10,
	// 环境变量
	env : env,
	// 本地存储
	ls:'ub',
	ss:'ub',
	appUrl:'http://192.168.5.70:8020/jia-flutter/flutter_web_study/app/build/index.html/#/'
}

// 正式访问地址: http://h5.ubzyw.com/h5Operation
// 预发布环境：http://preh5.ubzyw.com/h5Operation
// 测试访问地址: https://testh5s.ubzyw.com/h5Operation