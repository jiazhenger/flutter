import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'数据表显示原始数据集',
	keyword:'DataTable( )',
	type:'DataTable',
	url:'DataTablePage',
	data:[
		{ keyword:'columns', type:'List<DataColumn>', pro:'列数据'},
		{ keyword:'columnSpacing', type:'double', pro:'列空隙' },
		{ keyword:'dataRowHeight', type:'double', pro:'数据行高' },
		{ keyword:'headingRowHeight ', type:'double', pro:'头部行高' },
		{ keyword:'headingRowHeight ', type:'double', pro:'头部行高' },
		{ keyword:'horizontalMargin ', type:'double', pro:'水平间距' },
		{ keyword:'rows', type:' List<DataRow>', pro:'行数据'},
		{ keyword:'sortAscending ', type:'bool', pro:'是否按升序排序' },
		{ keyword:'sortColumnIndex ', type:'int', pro:'列排序索引' }
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }