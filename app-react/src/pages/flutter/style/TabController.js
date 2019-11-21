import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'tab 控制器', 
	keyword:'TabController( )', 
	type:'TabController',
	data:[
		{ keyword:'length', type:'int',  pro:'tab 长度' },
		{ keyword:'vsync', type:'TickerProvider', pro:'垂直同步', code:[{path:'flutter/public/vsync'}] },
		{ 
			noOrder:true ,pro:'示例', 
			code:[{ path:'flutter/style/TabController/TabController'}],
			link:[
				{title:'Duration',url:'/flutter/time/Duration'},
				{title:'Curves',url:'/flutter/animation/Curves'},
			]
		},
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }