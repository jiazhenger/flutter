import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'切换',
	keyword:'Switch( )',
	type:'Switch',
	url:'SwitchPage',
	data:[
		{ keyword:'value', type:'bool', pro:'开关值' },
		{ keyword:'activeColor', type:'Color', pro:'未打开时的长条背景颜色', link:'/flutter/style/Colors' },
		{ keyword:'activeTrackColor', type:'Color', pro:'打开时的长条背景颜色', link:'/flutter/style/Colors' },
		{ keyword:'inactiveThumbColor', type:'Color', pro:'未开时的圆形背景颜色', link:'/flutter/style/Colors' },
		{ keyword:'inactiveTrackColor', type:'Color', pro:'打开时的圆形背景颜色', link:'/flutter/style/Colors' },
		{ 
			keyword:'inactiveThumbImage', type:'ImageProvider<dynamic>', pro:'未打开时的长条背景图片',
			code:[ {path:'flutter/widget/image/image'} ],
			link:[
				{ title:'AssetImage', url:'/flutter/image/AssetImage' },
				{ title:'NetworkImage', url:'/flutter/image/NetworkImage' },
			]
		},
		{ 
			keyword:'activeThumbImage', type:'ImageProvider<dynamic>', pro:'打开时的长条背景图片', 
			code:[ {path:'flutter/widget/image/image'} ],
			link:[
				{ title:'AssetImage', url:'/flutter/image/AssetImage' },
				{ title:'NetworkImage', url:'/flutter/image/NetworkImage' },
			]
		},
		{ keyword:'dragStartBehavior', type:'DragStartBehavior', pro:'拖动行为', code:[{ path:'flutter/public/DragStartBehavior'}] },
		{ keyword:'materialTapTargetSize', type:'MaterialTapTargetSize', pro:'按钮点击范围', code:[{path:'flutter/public/MaterialTapTargetSize'}] },
		{ keyword:'onChanged', type:'void Function(bool)', pro:'改变时执行', code:[ {path:'flutter/widget/Form/Switch/onChanged'} ] },
		{ noOrder:true, pro:'示例', code:[ {path:'flutter/widget/Form/Switch/Switch'} ] },
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }