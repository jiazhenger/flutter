import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'sliver 列表',
	keyword:'SliverList( )',
	type:'SliverList',
	url:'CustomScrollViewPage',
	data:[
		{ keyword:'delegate', type:'SliverChildDelegate', pro:'自定义控件', code:[ {path:'flutter/widget/scroll/SliverList/delegate'} ] },
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }