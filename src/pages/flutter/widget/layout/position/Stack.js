import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'绝对布局',
	keyword:'Stack( )',
	type:'Stack',
	url:'StackPage',
	data:[
		{ keyword:'alignment', type:'AlignmentDirectional', pro:'对齐方式', link:'/flutter/style/align/AlignmentDirectional' },
		{ keyword:'textDirection', type:'TextDirection', pro:'排列顺序', code:[ {path:'flutter/widget/text/TextDirection'} ] },
		{ keyword:'fit', type:'StackFit', pro:'填充方式', code:[ {path:'flutter/public/StackFit'} ] },
		{ keyword:'overflow', type:'Overflow', pro:'对 Positioned() 的隐藏方式', code:[ {path:'flutter/public/Overflow'} ] },
		{ keyword:'children', type:'List<Widget>', pro:'列表控件，所有控件会重合在一起', code:[ {path:'flutter/public/widget-children'} ]  }
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }