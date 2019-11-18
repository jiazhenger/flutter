import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'多选框',
	keyword:'Checkbox( )',
	type:'Checkbox',
	url:'CheckboxPage',
	data:[
		{ keyword:'value', type:'bool', pro:'是否选中' },
		{ keyword:'tristate', type:'bool', pro:'如果为真，则复选框的值可以为 true、false、null' },
		{ keyword:'activeColor', type:'Color', pro:'选中时的背景颜色', link:'/flutter/style/Colors' },
		{ keyword:'checkColor', type:'Color', pro:'勾的颜色', link:'/flutter/style/Colors' },
		{ keyword:'materialTapTargetSize', type:'MaterialTapTargetSize', pro:'按钮点击范围', code:[{path:'flutter/public/MaterialTapTargetSize'}] },
		{ keyword:'onChanged', type:'void Function( bool )', pro:'改变时执行', code:[ {path:'flutter/widget/Form/Checkbox/onChanged'} ] },
		{ noOrder:true, pro:'示例', code:[ {path:'flutter/widget/Form/Checkbox/Checkbox'} ] },
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }