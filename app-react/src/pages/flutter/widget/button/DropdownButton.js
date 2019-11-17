import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'DropdownButton 下拉列表按钮',
	keyword:'DropdownButton( )',
	type:'DropdownButton',
	url:'DropdownButtonPage',
	data:[
		{ keyword:'value', type:'T', pro:'选中值', code:[{path:'flutter/widget/button/DropdownButton/value'}] },
		{ 
			keyword:'items', type:'List<DropdownMenuItem<T>>', pro:'选择列表',
			code:[{path:'flutter/widget/button/DropdownButton/items'}],
			link:[
				{ title:'DropdownMenuItem', url:'/flutter/widget/DropdownMenuItem'},
				{ title:'map', url:'/dart/grammar/data-type/list'},
				{ title:'toList', url:'/dart/grammar/data-type/list'}
			]
		},
		{ keyword:'style', type:'TextStyle', pro:'文本样式', link:'/flutter/style/TextStyle' },
		{ keyword:'isDense', type:'bool', pro:'是否减小高度' },
		{ keyword:'underline', type:'Widget', pro:'下边线' },
		
		{ deviceTitle:'icon ', keyword:'icon', type:'Widget', pro:'icon' },
		{ keyword:'iconSize', type:'double', pro:'icon 大小' },
		{ keyword:'iconEnabledColor', type:'Color', pro:'icon 激活颜色', link:'/flutter/style/Colors' },
		{ keyword:'iconDisabledColor', type:'Color', pro:'icon 禁用颜色', link:'/flutter/style/Colors' },
		
		{ deviceTitle:'提示语',keyword:'hint', type:'Widget', pro:'激活时提示语' },
		{ keyword:'disabledHint', type:'Widget', pro:'禁用时提示语' },
		
		{ deviceTitle:'大小',keyword:'isExpanded', type:'bool', pro:'宽度是否全屏' },
		{ keyword:'isDense', type:'bool', pro:'是否减小高度' },
		
		{ deviceTitle:'事件',keyword:'onChanged', type:'void Function(T)', pro:'监听改变', code:[{path:'flutter/event/onChanged'}] },
		
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }