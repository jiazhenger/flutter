import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'IconButton icon 按钮',
	keyword:'IconButton( )',
	type:'IconButton',
	url:'IconButtonPage',
	data:[
		{ keyword:'icon', type:'Widget', pro:'任意控件'},
		{ keyword:'iconSize', type:'double', pro:'尺寸' },
		{ keyword:'tooltip', type:'String', pro:'长按提示' },
		
		{ deviceTitle:'颜色', keyword:'color', type:'Color', pro:'文本颜色', link:'/flutter/style/Colors' },
		{ keyword:'disabledColor', type:'Color', pro:'禁用颜色', link:'/flutter/style/Colors' },
		{ keyword:'highlightColor', type:'Color', pro:'按下颜色', link:'/flutter/style/Colors' },
		{ keyword:'hoverColor', type:'Color', pro:'移入颜色', link:'/flutter/style/Colors' },
		{ keyword:'focusColor', type:'Color', pro:'焦点颜色', link:'/flutter/style/Colors' },
		{ keyword:'splashColor', type:'Color', pro:'波纹颜色', link:'/flutter/style/Colors' },
		
		{ deviceTitle:'通用', keyword:'padding', type:'EdgeInsetsGeometry', pro:'补白', link:'/flutter/style/offset/EdgeInsets' },
		{ 
			keyword:'alignment', type:'AlignmentGeometry', pro:'对齐方式',
			code:[ {path:'flutter/public/alignment'} ],
			link:[
				{ title:'Alignment', url:'/flutter/style/align/Alignment' },
				{ title:'FractionalOffset', url:'/flutter/style/align/FractionalOffset' },
			]
		},
		
		{ deviceTitle:'事件', keyword:'onPressed', type:'void Function( )', pro:'点击事件', code:[{path:'flutter/event/onPressed'}] },
		{ 
			keyword:'focusNode', type:'FocusNode', pro:'监听焦点改变事件',
			code:[{path:'flutter/event/FocusNode/FocusNode'}],
			link:[{ title:'FocusNode', url:'/flutter/event/FocusNode' },]
		},
		{ keyword:'autofocus', type:'bool', pro:'是否自动聚焦' },
		
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }