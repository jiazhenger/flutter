import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'滚动控件器',
	keyword:'ScrollController( )',
	type:'ScrollController',
	data:[
		{ keyword:'initialScrollOffset', type:'double', pro:'初始偏移' },
		{ keyword:'keepScrollOffset', type:'bool', pro:'保持滚动偏移' },
		{ keyword:'debugLabel', type:'String', pro:'可读描述', code:[ {path:'flutter/public/debugLabel'} ] },
		{ noOrder:true, pro:'示例', code:[{ path:'flutter/widget/form/TextField/ScrollController'}]},
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }