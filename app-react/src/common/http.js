/* ====================================== http 请求  ====================================== */
import axios from 'axios'
import Config from './config'
import $fn from './fn'
// ===================================================== 公共函数

// ===================================================== 分页
const getText = (url,option)=>{
	let opt = {
		api : (Config.env ? 'http://localhost:3000/' : 'https://jiazhenger.github.io/flutter/') + 'assets/data/',
		...option
	}
	$fn.loading(true)
	return new Promise((resolve, reject) => {
		axios.get(opt.api + url + '.html').then(res => {
			let data = res.data
			if(data){
//				console.log('source:',opt.api + url + '.html')
				resolve(data);
			} else {
				reject(data);
			}
			$fn.loading(false)
		})
	})
}
const getDart = (url)=>{
	this.getText(url,{api:Config.appUrl})
}
export default { getText, getDart }
