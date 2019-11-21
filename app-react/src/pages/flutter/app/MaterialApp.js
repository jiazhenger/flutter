import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'MaterialApp 入口', 
	keyword:'MaterialApp( )', 
	type:'MaterialApp',
	data:[
		{ keyword:'text', type:'String',  pro:'文本' },
		{ keyword:'icon', type:'Widget',  pro:'图标' },
		{ keyword:'child', type:'Widget', pro:'控件，与 text 互斥' },
		{ noOrder:true, pro:'示例', code:[ {path:'flutter/app/MaterialApp'} ]},
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }