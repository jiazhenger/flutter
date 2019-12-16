import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'AppBar 头部', 
	keyword:'AppBar( )', 
	type:'AppBar',
	data:[
		{ deviceTitle:'标题设置', keyword:'title', type:'Widget', pro:'标题' },
		{ keyword:'centerTitle', type:'bool', pro:'标题在是否居中' },
		{ keyword:'titleSpacing', type:'double', pro:'标题之间剖间距' },
		{ keyword:'toolbarOpacity', type:'double', pro:'标题透明度 0~1' },
		
		{ deviceTitle:'其它控件', keyword:'leading', type:'Widget', pro:'标题之前的控件，如：返回按钮' },
		{ keyword:'actions', type:'List<Widget>', pro:'一组动作操作控件' },
		{ keyword:'actionsIconTheme', type:'IconThemeData', pro:'动作操作控件的主题', link:'/flutter/style/IconThemeData' },
		
		{ keyword:'bottom', type:'PreferredSizeWidget', pro:'标题底部的标题 AppBar( )' },
		{ keyword:'bottomOpacity', type:'double', pro:'底部的标题透明度 0~1' },
		
		
		{ keyword:'flexibleSpace', type:'Widget', pro:'位于工具栏和选项卡栏后面的控件，它的高度将与应用程序栏的总高度相同' },
		{ keyword:'automaticallyImplyLeading', type:'bool', pro:'是否显示小控件' },
		
		{ deviceTitle:'整个设置', keyword:'backgroundColor', type:'Color', pro:'背景颜色' },
		{ keyword:'elevation', type:'double', pro:'阴影' },
		{ keyword:'brightness', type:'Brightness', pro:'亮度', code:[ {path:'flutter/public/Brightness'} ] },
		{ keyword:'iconTheme', type:'IconThemeData', pro:'图标主题', link:'/flutter/style/IconThemeData' },
		{ keyword:'preferredSize', type:'Size', pro:'大小', link:'/flutter/style/Size' },
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
		{ keyword:'textTheme', type:'TextTheme', pro:'文本主题', link:'/flutter/style/TextTheme' },
		{ keyword:'primary', type:'bool', pro:'appBar 是否显示在屏幕顶部' },
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }