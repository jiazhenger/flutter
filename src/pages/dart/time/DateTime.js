import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'时间声明',
	data:[
		{ pro:'定义时间对象', code:[ {path:'dart/time/DateTime/DateTime'} ]},
		{ pro:'转换时间', code:[ {path:'dart/time/DateTime/transition'} ]},
		{ pro:'时间戳', code:[ {path:'dart/time/DateTime/timestamp'} ]},
		{ pro:'格式化时间', code:[ {path:'dart/time/DateTime/format'} ]},
		{ pro:'时间增减量', code:[ {path:'dart/time/DateTime/add'} ]},
		{ pro:'时间比较', code:[ {path:'dart/time/DateTime/compare'} ]},
		{ pro:'时间差', code:[ {path:'dart/time/DateTime/difference'} ]},
		{ pro:'私有属性', code:[ {path:'dart/time/DateTime/property'} ]},
		{ pro:'公共属性', code:[ {path:'dart/grammar/entrance/public-property'} ]},
		{ pro:'公共方法', code:[ {path:'dart/grammar/entrance/public-method'} ]},
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }