import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'DropdownMenuItem 下拉菜单选项',
	keyword:'DropdownMenuItem( )',
	type:'DropdownMenuItem<T>',
	data:[
		{ keyword:'value', type:'T', pro:'值，可选' },
		{ keyword:'child', type:'Widget', pro:'列表控件，必填' },
		{ noOrder:true, pro:'示例', code:[{path:'flutter/widget/other/DropdownMenuItem'}] }
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }