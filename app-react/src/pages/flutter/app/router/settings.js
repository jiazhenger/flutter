import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'获取路由信息', 
	keyword:'x.settings.x', 
	type:'RouteSettings',
	data:[
		{ keyword:'arguments', type:'Object',  pro:'获取参数' },
		{ keyword:'name', type:'String',  pro:'获取路由名称' },
		{ keyword:'isInitialRoute', type:'bool',  pro:'是否是初始化路由' },
		{ keyword:'copyWith', type:'RouteSettings Function({name: String, isInitialRoute: bool, arguments: Object})',  pro:'复制路由' },
		{ noOrder:true,  pro:'示例', code:[ {path:'flutter/app/router/settings'} ]},
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }