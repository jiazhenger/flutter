/* ====================================== sessionStorage 本地存储  ====================================== */
import F from './fn'
export default {
	// ====================================== 设置存储
	set(key,value){
		let v = this.get(key);
		let mv = value;
		
		// 如果 v 存在，先取再存
		if(v){
			if(F.isObject(v)){ // 如果是对象，则合并对象
				mv = Object.assign({},v,mv);
			}else if(F.isArray(v)){
				v.push(mv);
				mv = v;
			}else{
				mv = value;
			}
		}
		// 如果 v 不存在，直接存
		if(F.isObject(mv) || F.isArray(mv)){
			mv = JSON.stringify(mv);
		}
		sessionStorage.setItem(key,mv);
	},
	// ====================================== 获取存储
	get(key){
		let k = sessionStorage.getItem(key);
		if(F.isValid(k)){
			return JSON.parse(k);
		}else{
			return false;
		}
	},
	// 输出全部信息
	output(){
		console.log(sessionStorage)
	},
	// ====================================== 列出指定 key
	remove(key){
		if(F.hasArray(key)){
			key.each((v,i)=>{
				sessionStorage.removeItem(v);
			})
		}else{
			sessionStorage.removeItem(key);
		}
	},
	// ====================================== 清除全部
	clear(){
		sessionStorage.clear()
	}
}
