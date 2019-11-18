import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'RaisedButton 普通按钮',
	keyword:'RaisedButton( )',
	type:'RaisedButton',
	url:'RaisedButtonPage',
	data:[
		{ noOrder:true, pro:'同MaterialButton公有属性', link:'/flutter/button/MaterialButton' },
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }