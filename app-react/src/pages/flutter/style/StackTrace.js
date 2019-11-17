import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'堆栈踪迹',
	isGroup:true,
	data:[
		{ title:'当前堆栈踪迹', keyword:'StackTrace.current', type:'StackTrace' },
		{
			title:'从字符串追踪堆栈踪迹', keyword:'StackTrace.fromString( )',type:'StackTrace',
			data:[
				{ keyword:'stackTraceString', type:'String', pro:'', isValue:true },
			]
		},
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }