import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'MaterialButton 按钮',
	keyword:'MaterialButton( )',
	type:'MaterialButton',
	url:'MaterialButtonPage',
	data:[
		{ deviceTitle:'颜色', keyword:'color', type:'Color', pro:'背景颜色', link:'/flutter/style/Colors' },
		{ keyword:'textColor', type:'Color', pro:'文本颜色', link:'/flutter/style/Colors' },
		{ keyword:'textColor', type:'Color', pro:'文本颜色', link:'/flutter/style/Colors' },
		{ keyword:'highlightColor', type:'Color', pro:'点击颜色', link:'/flutter/style/Colors' },
		{ keyword:'splashColor', type:'Color', pro:'波纹颜色', link:'/flutter/style/Colors' },
		{ keyword:'hoverColor', type:'Color', pro:'移入颜色', link:'/flutter/style/Colors' },
		{ keyword:'focusColor', type:'Color', pro:'焦点颜色', link:'/flutter/style/Colors' },
		{ keyword:'disabledColor', type:'Color', pro:'禁用背景颜色', link:'/flutter/style/Colors' },
		{ keyword:'disabledTextColor', type:'Color', pro:'禁用文本颜色', link:'/flutter/style/Colors' },
		{ keyword:'colorBrightness', type:'Brightness', pro:'亮度', code:[{path:'flutter/widget/button/Brightness'}] },
		{ keyword:'textTheme', type:'ButtonTextTheme', pro:'文本主题颜色', code:[{path:'flutter/widget/button/ButtonTextTheme'}] },
		
		
		{ deviceTitle:'阴影', keyword:'elevation', type:'double', pro:'阴影' },
		{ keyword:'focusElevation', type:'double', pro:'焦点阴影' },
		{ keyword:'highlightElevation', type:'double', pro:'按下阴影' },
		{ keyword:'disabledElevation', type:'double', pro:'禁用阴影' },
		
		{ deviceTitle:'尺寸',  keyword:'height', type:'double', pro:'高' },
		{ keyword:'minWidth', type:'double', pro:'最小宽度' },
		
		{ deviceTitle:'通用', keyword:'child', type:'widget', pro:'子控件' },
		{ keyword:'padding', type:'EdgeInsetsGeometry', pro:'补白', link:'/flutter/style/offset/EdgeInsets' },
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
		{ 
			keyword:'animationDuration', type:'Duration', pro:'波纹动画时长',
			code:[ {path:'flutter/time/Duration'} ],
			link:[
				{ title:'Duration', url:'/flutter/time/Duration' },
			]
		},
		{ deviceTitle:'监听事件', keyword:'onPressed', type:'void Function( )', pro:'点击事件', code:[{path:'flutter/widget/button/onPressed'}] },
		{ keyword:'onHighlightChanged', type:'void Function( bool )', pro:'高亮改变事件', code:[{path:'flutter/widget/button/onHighlightChanged'}] },
		
		
		{ deviceTitle:'其它',   keyword:'materialTapTargetSize', type:'MaterialTapTargetSize', pro:'按钮点击范围', code:[{path:'flutter/widget/button/MaterialTapTargetSize'}] },
		{ keyword:'autofocus', type:'bool', pro:'是否自动聚焦' },
		{ keyword:'focusNode', type:'FocusNode', pro:'监听焦点改变事件', code:[{path:'flutter/event/FocusNode/FocusNode'}] },
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }