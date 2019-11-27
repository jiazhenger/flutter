/* ====================================== http 请求  ====================================== */
import axios from 'axios'
const Config = require('@common/config')
// ===================================================== 公共函数

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
export default { getText, getDart }
