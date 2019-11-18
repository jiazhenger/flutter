import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'单选框',
	keyword:'Radio( )',
	type:'Radio',
	url:'RadioPage',
	data:[
		{ keyword:'value', type:'T', pro:'本身值' },
		{ keyword:'groupValue', type:'T', pro:'当前选择的值' },
		{ keyword:'activeColor', type:'Color', pro:'选中时的背景颜色', link:'/flutter/style/Colors' },
		{ keyword:'materialTapTargetSize', type:'MaterialTapTargetSize', pro:'按钮点击范围', code:[{path:'flutter/public/MaterialTapTargetSize'}] },
		{ keyword:'onChanged', type:'void Function( T )', pro:'改变时执行', code:[ {path:'flutter/widget/Form/Radio/onChanged'} ] },
		{ noOrder:true, pro:'示例', code:[ {path:'flutter/widget/Form/Radio/Radio'} ] },
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }