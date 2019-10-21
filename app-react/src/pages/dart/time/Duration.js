import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'一段时间',
	data:[
		{ pro:'定义一段时间', code:[ {path:'dart/time/Duration/Duration'} ]},
		{ pro:'运算', code:[ {path:'dart/time/Duration/operation'} ]},
		{ pro:'属性', code:[ {path:'dart/time/Duration/property'} ]},
		{ pro:'方法', code:[ {path:'dart/time/Duration/method'} ]},
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }