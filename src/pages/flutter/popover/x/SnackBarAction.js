import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'关闭动作',
	keyword:'SnackBarAction( )',
	type:'SnackBarAction',
	data:[
		{ keyword:'label', type:'String', pro:'标签文本' },
		{ keyword:'textColor', type:'Color', pro:'label 颜色', link:'/flutter/style/Colors' },
		{ keyword:'disabledTextColor', type:'Color', pro:'点击离开时的颜色', link:'/flutter/style/Colors' },
		{ keyword:'onPressed', type:'void Function( )', pro:'点击事件', code:[{path:'flutter/event/onPressed'}] }
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }