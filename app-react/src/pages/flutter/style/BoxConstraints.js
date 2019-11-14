import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'限制高宽',
	keyword:'BoxConstraints( )',
	data:[
		{ keyword:'minWidth', type:'double', pro:'最小宽度' },
		{ keyword:'maxWidth', type:'double', pro:'最大宽度' },
		{ keyword:'minHeight', type:'double', pro:'最大高度' },
		{ keyword:'maxHeight', type:'double', pro:'最大高度' },
		{ noOrder:true, pro:'示例', code:[ {path:'flutter/style/BoxConstraints/BoxConstraints'} ] },
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }