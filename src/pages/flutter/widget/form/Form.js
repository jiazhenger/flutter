import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'Form 表单容器，相当于 <form> 标签',
	keyword:'Form( )',
	type:'Form',
	url:'FormPage',
	data:[
		{ 
			keyword:'key', type:'GlobalKey<FormState>( )', pro:'定义一个全局key',
			code:[{path:'flutter/com/key/currentState'}],
			link:[{ title:'key', url:'/flutter/com/key' }]
		},
		{ keyword:'autovalidate', type:'bool', pro:'是否自动检验输入内容' },
		{ keyword:'child', type:'Widget', pro:'子控件' },
		{ keyword:'onChanged', type:'void Function( )', pro:'Form的任意一个子FormField内容发生变化时执行', code:[ {path:'flutter/widget/Form/form/onChanged'} ] },
		{ 
			keyword:'onWillPop', type:'Future<bool> Function( )', pro:'防止用户误触返回键退出，拦截返回的事件', 
			code:[ {path:'flutter/widget/Form/form/onWillPop'} ],
			link:[
				{ title:'Duration', url:'/flutter/time/Duration' },
				{ title:'DateTime', url:'/dart/time/DateTime' }
			]
		},
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }