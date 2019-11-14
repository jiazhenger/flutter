import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'表格列 <td>',
	keyword:'TableCell( )',
	type:'TableCell',
	data:[
		{ keyword:'defaultVerticalAlignment', type:'TableCellVerticalAlignment', pro:'垂直对齐方式', code:[ {path:'flutter/widget/table/Table/TableCellVerticalAlignment'} ] },
		{ keyword:'child', type:'Widget', pro:'控件' },
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }