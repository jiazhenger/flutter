import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'数字类型',
	data:[
		{ pro:'类型声明', code:[ {path:'dart/grammar/var/type/num'} ]},
		{ pro:'int', code:[ {path:'dart/grammar/data-type/num/int'} ]},
		{ pro:'double', code:[ {path:'dart/grammar/data-type/num/double'} ]},
		{ pro:'字符串转为数字', code:[ {path:'dart/grammar/data-type/num/toNum'} ]},
		{ pro:'转为 int', code:[ {path:'dart/grammar/data-type/num/toInt'} ]},
		{ pro:'转为 double', code:[ {path:'dart/grammar/data-type/num/toDouble'} ]},
		{ pro:'常用方法', code:[ {path:'dart/grammar/data-type/num/common'} ]},
		{ pro:'私有方法', code:[ {path:'dart/grammar/data-type/num/method'} ]},
		{ pro:'私有属性', code:[ {path:'dart/grammar/data-type/num/property'} ]},
		{ pro:'公共属性', code:[ {path:'dart/grammar/entrance/public-property'} ]},
		{ pro:'公共方法', code:[ {path:'dart/grammar/entrance/public-method'} ]},
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }