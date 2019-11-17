import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'基于与流交互的最新快照构建自身的widget',
	keyword:'StreamBuilder( )',
	type:'StreamBuilder',
	data:[
		{ keyword:'initialData', type:'T', pro:'任意 dart 数据类型' },
		{ 
			keyword:'stream', type:'Stream<T> ', pro:'',
			code:[ {path:'flutter/public/Future'} ],
			link:[ {title:'Future',url:'/flutter/widget/Future' }]
		},
		{ keyword:'builder', type:'Widget Function(BuildContext, AsyncSnapshot<T>)', pro:'', code:[ {path:'flutter/widget/async/FutureBuilder/builder'} ] },
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }