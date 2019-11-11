import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'FloatingActionButton 浮动按钮',
	keyword:'FloatingActionButton( )',
	type:'FloatingActionButton',
	url:'FloatingActionButtonPage',
	data:[
		{ deviceTitle:'背景颜色', keyword:'backgroundColor', type:'Color', pro:'背景颜色', link:'/flutter/style/Colors' },
		{ keyword:'splashColor', type:'Color', pro:'波纹颜色', link:'/flutter/style/Colors' },
		
		{ deviceTitle:'前景颜色', keyword:'foregroundColor', type:'Color', pro:'前景颜色', link:'/flutter/style/Colors' },
		
		{ deviceTitle:'阴影', keyword:'elevation', type:'double', pro:'阴影' },
		{ keyword:'disabledElevation', type:'double', pro:'禁用阴影' },
		
		{ deviceTitle:'按下', keyword:'highlightElevation', type:'double', pro:'按下阴影' },
		
		{ deviceTitle:'移入', keyword:'hoverColor', type:'Color', pro:'移入颜色', link:'/flutter/style/Colors' },
		{ keyword:'hoverElevation', type:'double', pro:'移入阴影' },
		
		{ deviceTitle:'焦点', keyword:'focusColor', type:'Color', pro:'焦点颜色', link:'/flutter/style/Colors' },
		{ keyword:'focusElevation', type:'double', pro:'焦点阴影' },
		
		{ deviceTitle:'通用', keyword:'child', type:'widget', pro:'子控件' },
		{ 
			keyword:'clipBehavior', type:'Clip', pro:'裁剪方式',
			code:[ {path:'flutter/style/Clip/Clip'} ],
			link:[{ title:'Clip', url:'/flutter/style/Clip' } ]
		
		},
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
		{ deviceTitle:'事件', keyword:'onPressed', type:'void Function( )', pro:'点击事件', code:[{path:'flutter/event/onPressed'}] },
		{ 
			keyword:'focusNode', type:'FocusNode', pro:'监听焦点改变事件',
			code:[{path:'flutter/event/FocusNode/FocusNode'}],
			link:[{ title:'FocusNode', url:'/flutter/event/FocusNode' },]
		},
		{ keyword:'autofocus', type:'bool', pro:'是否自动聚焦' },
		
		{ deviceTitle:'其它',   keyword:'materialTapTargetSize', type:'MaterialTapTargetSize', pro:'按钮点击范围', code:[{path:'flutter/widget/button/MaterialTapTargetSize'}] },
		{ keyword:'tooltip', type:'String', pro:'长按提示' },
		{ keyword:'mini', type:'bool', pro:'长按提示' },
		{ keyword:'isExtended', type:'bool', pro:'是否扩展' },
		{ keyword:'heroTag', type:'Object', pro:'' },
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }