import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'FlatButton 平坦按钮',
	keyword:'FlatButton( )',
	type:'FlatButton',
	url:'FlatButtonPage',
	data:[
		{ deviceTitle:'文本颜色', keyword:'textColor', type:'Color', pro:'文本颜色', link:'/flutter/style/Colors' },
		{ keyword:'disabledTextColor', type:'Color', pro:'禁用文本颜色', link:'/flutter/style/Colors' },
		{ keyword:'textTheme', type:'ButtonTextTheme', pro:'文本主题颜色', code:[{path:'flutter/widget/button/ButtonTextTheme'}] },
		
		{ deviceTitle:'背景颜色', keyword:'color', type:'Color', pro:'背景颜色', link:'/flutter/style/Colors' },
		{ keyword:'disabledColor', type:'Color', pro:'禁用背景颜色', link:'/flutter/style/Colors' },
		{ keyword:'splashColor', type:'Color', pro:'波纹颜色', link:'/flutter/style/Colors' },
		
		{ deviceTitle:'动态颜色',keyword:'highlightColor', type:'Color', pro:'点击颜色', link:'/flutter/style/Colors' },
		{ keyword:'hoverColor', type:'Color', pro:'移入颜色', link:'/flutter/style/Colors' },
		{ keyword:'focusColor', type:'Color', pro:'焦点颜色', link:'/flutter/style/Colors' },
		
		{ deviceTitle:'亮度',keyword:'colorBrightness', type:'Brightness', pro:'亮度', code:[{path:'flutter/public/Brightness'}] },
		
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
		{ deviceTitle:'监听事件', keyword:'onPressed', type:'void Function( )', pro:'点击事件', code:[{path:'flutter/event/onPressed'}] },
		{ keyword:'onHighlightChanged', type:'void Function( bool )', pro:'高亮改变事件', code:[{path:'flutter/event/onHighlightChanged'}] },
		{ 
			keyword:'focusNode', type:'FocusNode', pro:'监听焦点改变事件',
			code:[{path:'flutter/event/FocusNode/FocusNode'}],
			link:[{ title:'FocusNode', url:'/flutter/event/FocusNode' },]
		},
		{ keyword:'autofocus', type:'bool', pro:'是否自动聚焦' },
		
		{ deviceTitle:'其它',   keyword:'materialTapTargetSize', type:'MaterialTapTargetSize', pro:'按钮点击范围', code:[{path:'flutter/widget/button/MaterialTapTargetSize'}] },
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }