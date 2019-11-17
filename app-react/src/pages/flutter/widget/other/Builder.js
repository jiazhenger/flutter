import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'创建带 BuildContext 的控件',
	keyword:'Builder( )',
	type:'Builder',
	data:[
		{ keyword:'builder', type:'Widget Function(BuildContext)', pro:'自动定义内容', code:[ {path:'flutter/public/builder'} ] },
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }