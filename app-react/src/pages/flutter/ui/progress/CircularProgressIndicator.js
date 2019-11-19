import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'圆形进度条',
	keyword:'CircularProgressIndicator( )',
	type:'CircularProgressIndicator',
	url:'CircularProgressIndicatorPage',
	data:[
		{ keyword:'strokeWidth', type:'double', pro:'圆环的宽度' },
		{ noOrder:true,pro:'其它属性同 LinearProgressIndicator( )', link:'/flutter/ui/LinearProgressIndicator'},
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }