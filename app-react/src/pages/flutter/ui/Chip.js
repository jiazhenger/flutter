import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'将一个复杂内容实体展现在一个小块中，如联系人',
	keyword:'Chip( )',
	type:'Chip',
	url:'ChipPage',
	data:[
		{ keyword:'avatar', type:'Widget', pro:'头像控件' },
		{ keyword:'elevation', type:'double', pro:'阴影' },
		{ keyword:'backgroundColor', type:'Color', pro:'背景颜色', link:'/flutter/style/Colors' },
		{ keyword:'shadowColor', type:'Color', pro:'阴影颜色', link:'/flutter/style/Colors' },
		{ keyword:'padding', type:'EdgeInsetsGeometry', pro:'补白', link:'/flutter/style/offset/EdgeInsets' },
		{ 
			keyword:'shape', type:'ShapeBorder', pro:'形状',
			code:[ {path:'flutter/public/shape'} ],
			link:[ 
				{ title:'BeveledRectangleBorder', url:'/flutter/style/shape/BeveledRectangleBorder' },
				{ title:'CircleBorder', url:'/flutter/style/shape/CircleBorder' },
				{ title:'RoundedRectangleBorder', url:'/flutter/style/shape/RoundedRectangleBorder' },
				{ title:'StadiumBorder', url:'/flutter/style/shape/StadiumBorder' },
				{ title:'UnderlineInputBorder', url:'/flutter/style/shape/UnderlineInputBorder' },
				{ title:'Border', url:'/flutter/style/border/Border' }
			]
		},
		{ 
			keyword:'clipBehavior', type:'Clip', pro:'裁剪方式',
			code:[ {path:'flutter/style/Clip/Clip'} ],
			link:[{ title:'Clip', url:'/flutter/style/Clip' } ]
		},
		{ keyword:'materialTapTargetSize', type:'MaterialTapTargetSize', pro:'点击范围', code:[{path:'flutter/public/MaterialTapTargetSize'}] },
		{ 
			keyword:'focusNode', type:'FocusNode', pro:'监听焦点改变事件',
			code:[{path:'flutter/event/FocusNode/FocusNode'}],
			link:[{ title:'FocusNode', url:'/flutter/event/FocusNode' },]
		},
		{ keyword:'autofocus', type:'bool', pro:'是否自动聚焦' },
		{ deviceTitle:'标签', keyword:'label', type:'widget', pro:'标签名' },
		{ keyword:'labelPadding', type:'EdgeInsetsGeometry', pro:'label补白', link:'/flutter/style/offset/EdgeInsets' },
		{ keyword:'labelStyle', type:'TextStyle', pro:'label 样式', link:'/flutter/style/TextStyle' },
		
		{ deviceTitle:'删除控件', keyword:'deleteIcon', type:'widget', pro:'删除控件' },
		{ keyword:'deleteIconColor', type:'Color', pro:'删除控件颜色', link:'/flutter/style/Colors' },
		{ keyword:'deleteButtonTooltipMessage', type:'String', pro:'删除控件信息提示' },
		{ keyword:'onDeleted', type:'void Function( )', pro:'点删除控件时执行', code:[ {path:'flutter/event/onDeleted'} ] },
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }