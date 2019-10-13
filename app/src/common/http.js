/* ====================================== http 请求  ====================================== */
import axios from 'axios'
import F from './fn'
const Config = require('@common/config')
// ===================================================== 公共函数
const api = Config.api;
// 错误提法信息
const logMsg = (msg,content)=>{ Config.env && console.log(msg,content) }
//const logError = (msg)=>{ logMsg('%cj+2 错误提示：' + msg,'color:red')}

// 配置头信息
//const getToken = ()=>{
////	let token = this.$fn.getQuery('token');
//	let user = F.local('user');
//	return user && user.token ? user.token : '';
//}
const config = (opt)=>{
	let contentType = opt.upload ? 'multipart/form-data' : 'application/json;charset=utf-8';
	let header = {'Content-Type': contentType }
                
	return {
		baseURL: api,
		headers: header,
		timeout: 30000,
		//withCredentials : true	// 跨域请求想要带上cookies设置为 true
	}
}
// 序列化参数 {a:1,b:2} to ?a=1&b=2
const serializeParam = (body) => {
	if(!F.hasObject(body)) return '';
	let param = body;
	let str='';
	for(let i in param){
		if(F.isValid(param[i])){ str += i + '=' + param[i] + '&' }
	}
	if (str.charAt(str.length - 1) === '&'){ str = str.slice(0, str.length - 1) }
	return encodeURI( '?' + str);	// encodeURI 不对 [:, /, ;,?] 进行编码
}

// 序列化公参及自定义传参
//const combineParam = (body) => { return serializeParam(LS.get('login')) + serializeParam(body) }

// 将 body 以函数形式处理
const manageBody = (body) => F.isFunction(body) ? body() : body
// 给空数据加类型
const setType = (_this,dataName) => {
	let stack = _this.state[dataName];
	if(F.isArray(stack)){
		stack = [];
	}else if(F.isObject(stack)){
		stack = {}
	}else{
		stack = '';
	}
	if(F.isValid(dataName)){_this.setState({ [dataName] :  stack }) };
	return stack;
}
// http 核心封装
/**
 * defined = {
 * 		errorHandler: ()=>{}		// 只要出错就调用
 * 		suceessHander:()=>{}		// 只要调用接口成功就调用
 * 	    anywayHandler:()=>{}		// 成功或失败都调用
 * 		error:()=>{}				// 接口请求不通时调用
 * 		closeToast:true				// 数据请求成功但不符合规则时，屏蔽默认提示，可在 then 中自定义提示
 * }
 * 
 * */
const coreRequest = (url, param, action, defined) => {
	let body = manageBody(param);				// 处理自定义参数的不同形式 {} function
	let sParam = serializeParam(body);	// 序列化参数
	let userDefined = defined || {}
	let promise;
	let configs = config({
		upload: userDefined.upload,
		noToken: userDefined.noToken,
	})
	
	if(action === 'get'){
		promise = axios.get(url + sParam, configs);
		logMsg('%c' + action + ' === ' + api + url + sParam, 'color:blue')		// 输出 api
	}else{
		promise = userDefined.upload ? axios.post(url, body, configs) : axios.post(url + sParam, body, configs);
		logMsg('%c' + action + ' === ' + api + url + sParam, 'color:blue');		// 输出 api
	}
	
	// 加载效果
	return new Promise((resolve, reject) => {
		promise.then(res => {	// 接口正确接收数据处理
			let data = res.data;
			let code = data.status;
			if(code === 200){	// 数据请求成功
				resolve(data.data);
				logMsg(url + '===', data.data);
			} else if(code === 100){	// 未登录
//				F.toast('你还未登录，请先登录',()=>{ F.localRemove(); F.go() },1000)
				logMsg(url + '===', data)
			}else{ // 数据请求成功但不符合规则
				reject(data);
				if(!userDefined.closeToast){
					F.toast(data['info'],userDefined.errorHandler);							// 默认开启出错提示
				}else{
					F.isFunction(userDefined.errorHandler) && userDefined.errorHandler();		// 只要出错就调用
				}
				F.isFunction(userDefined.failHandler) && userDefined.failHandler();				// 数据处理不满足条件时调用
				logMsg(url + '===', data);
			}
			
			F.isFunction(userDefined.anywayHandler)			&& userDefined.anywayHandler();  			// 只要调用接口就调用
			F.isFunction(userDefined.succeedHandler) 		&& userDefined.succeedHandler(data); 		// 只要调用接口成功就调用
			
		}, (err) => { 					// 接口错误处理
			F.toast('服务器或网络出错');
			F.isFunction(userDefined.serviceErrorHandler) 	&& userDefined.serviceErrorHandler();		// 服务器出错或无网络调用
			F.isFunction(userDefined.errorHandler) 			&& userDefined.errorHandler();				// 只要出错就调用
			F.isFunction(userDefined.anywayHandler)			&& userDefined.anywayHandler();  			// 只要调用接口就调用
			//error(err, api + url)
		})
	})
}
// ===================================================== ajax 请求组件
// post 请求
const post = (url,body,defined) => coreRequest(url,body,'post',defined)
// get 请求
const get = (url,body,defined) => coreRequest(url,body,'get',defined)
// ===================================================== ajax 提交
const submit = (_this,api,option)=>{
	let opt = {
		param:{},
		loadingText:'数据提交中...',			
		succeedText:'',					// 自定义成功提示
		succeedFn:'',					// 成功之后执行
		errorText:'',					// 自定义错误提示
		submitLoading:'submitLoading', 	// 加载判断
		replace:null,					// replace 路由
		push:null,						// push 路由
		refresh:false,					// 是否刷新
		closeToast:false,				// 是否关闭默认提示
		anywayHandler:()=>{},			// 无论请求成功或失败都执行此方法
		errorHandler:null,				//
		upload:false,					// 调用上传接口
		runFirst:true,					// 先跳转，后提示
		loading:true,
		...option
	}
	
	if(opt.loading){
		_this[opt.submitLoading] = true;
		_this.setState({ [opt.submitLoading] : true });
		F.loading(true,opt.loadingText);
	}
	
	const run = ()=>{
		opt.replace && _this.props.history.replace(opt.replace);
		opt.push && _this.props.history.push(opt.push)
		opt.refresh && F.refresh();
		opt.succeedFn && opt.succeedFn()
	}
	
	return new Promise((resolve, reject)=>{
		post(api,opt.param,{ 
			closeToast:opt.closeToast,
			anywayHandler:()=>{
				if(opt.loading){
					_this[opt.submitLoading] = false; 
					_this.setState({ [opt.submitLoading] : false }); 
					F.loading(false)
				}
				opt.anywayHandler()
			},
			errorHandler:()=>{
				if(!opt.loading){ F.loading(false) }
			},
			upload:opt.upload
		}).then(data=>{
			resolve(data)
			// 提示后执行
			if(opt.succeedText){
				if(opt.runFirst){
					F.toast(opt.succeedText);
					run();
				}else{
					F.toast(opt.succeedText,run)
				}
			}else{ // 直接执行
				run();
			}
		},data=>{
			reject(data)
			//F.prompt(opt.errorText,data['info']);
		})
	})
}
// ===================================================== 一般数据加载
const ajax = (_this,api,option)=>{
	let opt = {
		dataName:'data',				// 数据名字
		loading:true,					// 如果有加载效果
		param:{},						// 参数
		ajaxLoading:'ajaxLoading',		// 加载判断
		loadingText:'数据加载中...',			
		succeedHandler:null,			// 改变数据
		errorHandler:()=>{},
		...option
	}
	
	if(opt.loading){
		_this.setState({ [opt.ajaxLoading] : true })
		F.loading(true,opt.loadingText);
	}
	
	return new Promise((resolve,reject)=>{
		get(api,opt.param,{
			errorHandler:()=>{
				// 出错，清空 data
				setType(_this,opt.dataName)
				opt.errorHandler();
				
				if(!opt.loading){ F.loading(false) }
			},
			anywayHandler:()=>{
				if(opt.loading){
					 _this.setState({ [opt.ajaxLoading] : false })
					F.loading(false)
				}
			}
		}).then(data=>{
			if(F.isValid(data)){
				if(F.isFunction(opt.succeedHandler)){
					data = opt.succeedHandler(data);
				}
				if(F.isValid(opt.dataName)){
					_this.setState({ [opt.dataName] : data });
				}
				resolve(data);
			}else{
				let stack = setType(_this,opt.dataName);
				resolve(stack);
			}
		})
	})
}
// ===================================================== 分页
const getText = (url,option)=>{
	let opt = {
		api : (Config.env ? 'http://localhost:3000/' : 'https://jiazhenger.github.io/flutter/') + 'assets/data/',
		...option
	}
	return new Promise((resolve, reject) => {
		axios.get(opt.api + url + '.html').then(res => {
			let data = res.data
			if(data){
				console.log('source:',opt.api + url + '.html')
				resolve(data);
			} else {
				reject(data);
			}
		})
	})
}
const getDart = (url)=>{
	this.getText(url,{api:Config.appUrl})
}
// 下载 excel
//const loadingExcel = (url,param) => api + url + serializeParam({...param,token: getToken()})

export default { post, get, submit, ajax, getText, getDart }
