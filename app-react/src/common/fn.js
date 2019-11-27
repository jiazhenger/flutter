/* ====================================== 全局变量及方法  ====================================== */
//import LS from './localStorage'
//import SS from './sessionStorage'
//import CC from './cookie'
//import moment from 'moment'
export default {
	// ========================================================================  判断数据类型
//	// 判断数据是否是对象 {}
	isObject(obj){ return {}.toString.call(obj) === '[object Object]' },
//	// 判断数据是否是对象{}，且对象长度 >0
	hasObject(obj){ return this.isObject(obj) && Object.keys(obj).length > 0 },
//	// 判断数据是否是函数 function
//	isFunction(obj){ return {}.toString.call(obj) === '[object Function]' },
	// 判断数据是否是数组 []
	isArray(obj){ return {}.toString.call(obj) === '[object Array]' },
	// 判断数据是否是数级 []，且长度>0
	hasArray(obj){ return this.isArray(obj) && obj.length > 0 },
//	// 判断数据是否是字符串
	isString(obj){ return {}.toString.call(obj) === '[object String]' },
//	// 判断数据是否是数字
//	isNumber(obj){ return {}.toString.call(obj) === '[object Number]' },
//	// 判断数据是否有效
//	isValid(obj){ return (obj !== undefined && obj !== '' && obj !== null) || obj === 0 || obj === false },
    // ======================================================================== 阻止默认
    // 阻止冒泡不阻止默认行为
	stop(event){ event.stopPropagation() },
//	// 阻止冒泡并阻止默认行为
//	prevent(event){ event.preventDefault() },
	// ======================================================================== 返回测试数据
	// 将对象转为字符串
//	json(data){ return JSON.stringify(data,null,'\t') },
	// 将序列化对象转为对象
//	data(param){
//		if(!this.isValid(param) && !this.isString(param)) return {};
//		
//		let stack = {}
//		let arr = (param.replace('?','')).split('&');
//		
//		arr.forEach((v,i)=>{
//			let m = v.split('=');
//			stack[m[0]] = m[1];
//		})
//		
//		return stack
//	},
	// 序列化对象 {} to ?a=1&b=2
//	search(obj){
//		if(!this.hasObject(obj)) return;
//		let stack='?';
//		for(let i in obj){
//			stack+= i + '=' + JSON.stringify(obj[i]) + '&';
//		}
//		return stack.substring(0,stack.lastIndexOf('&'));
//	},
//	isTel(v){ return /^1[0-9]{10}$/.test(v) },
//	isPwd(v){ return /\w{6,18}$/.test(v) },
//	pwdReg: /\w{6,18}$/,
//	isId(v){ return /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(v) },
//	isEmail(v){ return /^([0-9A-Za-z\-_]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/g.test(v) },
//	isInt(v){ return /^[1-9]\d*$/.test(v) }, // 整数
	// ======================================================================== redux
//	loading(bool,msg){
//		let loading = document.querySelector('#ubLoading');
//		if(bool){
//			loading.querySelector('.ub-loading-msg').innerHTML = msg || '数据加载中'
//			loading.style.display = 'block'
//		}else{
//			loading.style.display = 'none'
//		}
//	},
	toast(msg,callback){
		let toast = document.querySelector('#ubToast')
		toast.style.display = 'block'
		toast.querySelector('.ub-toast').innerHTML = msg;
		setTimeout(()=>{ toast.style.display = 'none' },1500);
		callback&&callback()
	},
	// ======================================================================== 刷新跳转
//	go(path){
//		let route = path || '/login';
//		let port = window.location.port === 80 ? '' : ':' + window.location.port;
//		let url = window.location.protocol + '//' + window.location.hostname + port + window.location.pathname + '#' + route;
//		window.location.replace(url);
//	},
	// ======================================================================== 本地存储配置
//	local(name,data){
//		let sname =  name || 'user';
//		if(this.isValid(data)){
//			LS.set(sname,data);
//		}else {
//			let gname = LS.get(sname);
//			return gname;
//		}
//	},
//	localRemove(name){
//		let sname =  name || 'user';
//		LS.remove(sname);
//	},
//	// 获取 region
//	getUser(){
//		const user = LS.get('user');
//		if(this.hasObject(user)){
//			return user.user.managerVo;
//		}else{
//			return {}
//		}
//	},
	// ======================================================================== 格式化时间
//	format(time,flag){
//		let f = 'YYYY.MM.DD'
//		if(this.isNumber(time)){
//			if(flag === 1){
//				f = f + ' hh:mm:ss'
//			}
//			return moment(time).format(f)
//		}else{
//			return '--'
//		}
//	},
//	getNow(){ return moment(new Date().getTime()).format('YYYY年MM月DD日 hh:mm:ss') },
	// 绑定值
//	val(v){return this.isValid(v) ? v : '--'},
//	nan(v){return !isNaN(v) ? v : '--'},
	// ======================================================================== 获取 url 参数
	// getQuery(id){
	// 	var hash = window.location.search || window.location.hash;
	// 	var stack = {}
	// 	if(hash.indexOf('?') !== -1){
	// 		var search = hash.split('?');
	// 		search = search[1].split('&');
	// 		search.forEach(function(v,i){
	// 			var s = v.split('=');
	// 			stack[s[0]] = s[1]
	// 		})
	// 	}
	// 	if(id){
	// 		return stack[id];
	// 	}
	// 	return stack;
	// },
	// 设置浏览器 title
	setTitle(text){ if(text) document.title = text; },
	// 判断平台
	platform(androidCallback,iosCallback,pcCallback){
		let u = navigator.userAgent;
		let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1;
		let isIos = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
		let isMobile = /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)
		
		androidCallback && androidCallback();
		iosCallback && iosCallback();
		pcCallback && pcCallback();
		
		return {
			isAndroid : isAndroid ,
			isIos : isIos,
			isPc: !isMobile
		}
	},
	getDeviceType(){ return this.platform().isIos ? 1 : 0 },
	// 复制
	copy(id,content){
		let sel = document.getElementById(id)
		sel.select()
		document.execCommand('copy')
		this.toast('复制成功')
	},
	// 显示 phone
	showPhone(path){
		let url = process.env.NODE_ENV === 'development' ? 'http://192.168.5.70:8020/flutter_web_study/app/build/index.html#/' :
		'https://jiazhenger.github.io/flutter/app/#/'
		let iphone = document.querySelector('#iPhone');
		iphone.style.display = 'flex'
		document.querySelector('#iframe').setAttribute('src',url + (path?path:''))
	},
	// 隐藏 phone
	hidePhone(){
		document.querySelector('#iPhone').style.display = 'none'
		document.querySelector('#iframe').removeAttribute('src')
	}
}