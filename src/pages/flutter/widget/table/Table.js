import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'表格 <table>',
	keyword:'Table( )',
	type:'Table',
	url:'TablePage',
	data:[
		{ keyword:'border', type:'TableBorder', pro:'边框样式', link:'/flutter/style/border/TableBorder' },
		{ 	
			keyword:'columnWidths', type:'Map<int, TableColumnWidth>', pro:'列宽度，相当于 <colgroup>',
			code:[{path:'flutter/widget/table/Table/columnWidths'}],
			link:[{ title:'FixedColumnWidth', url:'/flutter/table/FixedColumnWidth'}]
		},
		{ 
			keyword:'defaultColumnWidth', type:'TableColumnWidth', pro:'默认的每列宽度值,一般不变化', 
			code:[ {path:'flutter/widget/table/Table/defaultColumnWidth'} ],
			link:[{ title:'FixedColumnWidth', url:'/flutter/table/FixedColumnWidth'}]
		},
		{ keyword:'defaultVerticalAlignment', type:'TableCellVerticalAlignment', pro:'垂直对齐方式', code:[ {path:'flutter/widget/table/Table/TableCellVerticalAlignment'} ] },
		{ keyword:'textDirection', type:'TextDirection', pro:'排列顺序', code:[ {path:'flutter/widget/text/TextDirection'} ] },
		{ keyword:'textBaseline', type:'TextBaseline', pro:'文本绘制基线', code:[ {path:'flutter/public/TextBaseline'} ] },
		{ 
			keyword:'children', type:'List<TableRow> ', pro:'列表控件', 
			code:[ {path:'flutter/widget/table/Table/children'} ],
			link:[
				{ title:'TableRow', url:'/flutter/table/TableRow'},
				{ title:'TableCell', url:'/flutter/table/TableCell'}
			]
		},
		
		
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }