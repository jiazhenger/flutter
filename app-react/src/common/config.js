/* ====================================== api 配置  ====================================== */
const env = process.env.NODE_ENV === 'development';	// 是否为开发环境
/* ====================================== 全局变量配置  ====================================== */
module.exports = {
	// 环境变量
	env : env,
	appUrl:'http://192.168.5.70:8020/jia-flutter/flutter_web_study/app/build/index.html/#/'
}