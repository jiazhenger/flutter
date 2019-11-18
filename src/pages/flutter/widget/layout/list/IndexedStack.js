import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'显示 children 的第 index 个元素',
	keyword:'IndexedStack( )',
	type:'IndexedStack',
	url:'IndexedStackPage',
	data:[
		{ keyword:'index', type:'int', pro:'要显示元素的索引值' },
		{ keyword:'sizing', type:'StackFit', pro:'', code:[ {path:'flutter/public/StackFit'} ] },
		{ 
			keyword:'alignment', type:'Alignment', pro:'对齐方式',
			code:[ {path:'flutter/public/alignment'} ],
			link:[
				{ title:'Alignment', url:'/flutter/style/align/Alignment'},
				{ title:'FractionalOffset', url:'/flutter/style/align/FractionalOffset'},
			]	
		},
		{ keyword:'textDirection', type:'TextDirection', pro:'排列顺序', code:[ {path:'flutter/widget/text/TextDirection'} ] },
		{ keyword:'children', type:'List<Widget>', pro:'列表控件，所有控件会重合在一起', code:[ {path:'flutter/public/widget-children'} ]  }
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }