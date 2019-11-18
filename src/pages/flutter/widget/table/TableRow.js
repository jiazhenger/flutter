import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'表格行 <tr>',
	keyword:'TableRow( )',
	type:'TableRow',
	data:[
		{ 
			keyword:'decoration', type:'Decoration', pro:'装饰',
			code:[ {path:'flutter/widget/table/TableRow/decoration'} ],
			link:[
				{ title:'BoxDecoration', url:'/flutter/style/decoration/BoxDecoration'},
				{ title:'UnderlineTabIndicator', url:'/flutter/style/decoration/UnderlineTabIndicator'}
			]
		},
		{ 
			keyword:'children', type:'List<Widget>', pro:'列表控件',
			code:[ {path:'flutter/widget/table/TableRow/children'} ],
			link:[
				{ title:'TableCell', url:'/flutter/table/TableCell'},
				{ title:'Center', url:'/flutter/layout/Center'}
			]
		},
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }