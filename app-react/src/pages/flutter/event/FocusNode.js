import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'焦点事件',
	isGroup:true,
	data:[
		{
			title:'焦点事件',
			keyword:'FocusNode( )',
			type:'FocusNode',
			data:[
				{ keyword:'debugLabel', type:'String', pro:'焦点阴影' },
				{ keyword:'skipTraversal', type:'bool', pro:'是否跳过遍历' },
				{ keyword:'onKey', type:'bool Function(FocusNode,RawKeyEvent)', pro:'执行方法' },
				{ noOrder:true, pro:'示例', code:[{path:'flutter/event/FocusNode/FocusNode'}] },
			]
		},
		{
			title:'焦点事件',
			keyword:' FocusNode focusNode = new FocusNode(); focusNode.x( )',
			type:'FocusNode',
			data:[
				{ keyword:'addListener', type:'void addListener(void Function() listener) ', pro:'监听焦点改变事件', code:[{path:'flutter/event/FocusNode/addListener'}] },
				{ keyword:'unfocus', type:'void unfocus( void Function() )', pro:'失去焦点', code:[{path:'flutter/event/FocusNode/addListener'}] },
			]
		},
		{
			title:'焦点属性',
			keyword:'FocusNode focusNode = new FocusNode(); focusNode.x',
			type:'FocusNode',
			data:[
				{ keyword:'hasFocus', type:'bool', pro:'是有焦点' },
				{ keyword:'context', type:'BuildContext', pro:'' },
			]
		}
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }