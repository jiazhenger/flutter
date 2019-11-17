import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'每当用户按下或释放键盘上的键时调用',
	keyword:'RawKeyboardListener( )',
	type:'RawKeyboardListener',
	data:[
		{ 
			keyword:'focusNode', type:'FocusNode', pro:'监听焦点改变事件',
			code:[{path:'flutter/event/FocusNode/FocusNode'}],
			link:[{ title:'FocusNode', url:'/flutter/event/FocusNode' },]
		},
		{ keyword:'onKey', type:'void Function( RawKeyEvent )', pro:'监听事件', code:[{path:'flutter/event/onKey'}] },
		{ keyword:'child', type:'Widget', pro:'子控件' },
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }