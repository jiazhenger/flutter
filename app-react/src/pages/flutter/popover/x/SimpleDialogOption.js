import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'SimpleDialog 的选项',
	keyword:'SimpleDialogOption( )',
	type:'SimpleDialogOption',
	data:[
		{ keyword:'child', type:'Widget', pro:'控件'},
		{ keyword:'onPressed', type:'void Function( )', pro:'点击事件', code:[{path:'flutter/event/onPressed'}] }
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }