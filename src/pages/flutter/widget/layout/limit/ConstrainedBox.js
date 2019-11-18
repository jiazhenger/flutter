import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'限制盒子尺寸',
	keyword:'ConstrainedBox( )',
	type:'ConstrainedBox',
	data:[
		{ keyword:'constraints', type:'BoxConstraints', pro:'限制高宽', link:'/flutter/style/BoxConstraints' },
		{ keyword:'child', type:'Widget', pro:'控件' }
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }