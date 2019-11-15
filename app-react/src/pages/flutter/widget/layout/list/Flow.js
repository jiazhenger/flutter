import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'流式布局算法控件',
	keyword:'Flow( )',
	type:'Flow',
	url:'FlowPage',
	data:[
		{ keyword:'delegate', type:'FlowDelegate', pro:'自定义计算 widget', code:[ {path:'flutter/widget/layout/list/Flow/delegate'} ] },
		{ keyword:'children', type:'List<Widget>', pro:'列表控件，所有控件会重合在一起', code:[ {path:'flutter/public/widget-children'} ]  }
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }