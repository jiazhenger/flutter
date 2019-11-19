import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'步骤', keyword:'Step( )', type:'Step',
	data:[
		{ keyword:'title', type:'Widget',  pro:'标题' },
		{ keyword:'subtitle', type:'Widget',  pro:'副标题' },
		{ keyword:'content', type:'Widget',  pro:'内容' },
		{ keyword:'isActive', type:'bool',  pro:'当前步骤加样式' },
		{ keyword:'state', type:'StepState',  pro:'步骤状态', code:[ {path:'flutter/public/StepState'} ] },
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }