import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'自定义滚动 slivers',
	keyword:'SliverPadding( )',
	type:'SliverPadding',
	url:'CustomScrollViewPage',
	data:[
		{ keyword:'sliver', type:'Widget', pro:'单个碎片', code:[ {path:'flutter/widget/scroll/SliverPadding/sliver'} ] },
		{ keyword:'padding', type:'EdgeInsetsGeometry', pro:'补白', link:'/flutter/style/offset/EdgeInsets' }
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }