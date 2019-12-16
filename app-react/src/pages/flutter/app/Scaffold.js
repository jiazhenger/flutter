import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'Scaffold 布局结构', 
	keyword:'Scaffold( )', 
	type:'Scaffold',
	data:[
		{ keyword:'appBar', type:'PreferredSizeWidget', pro:'头部', link:'/flutter/app/appBar' },
		{ keyword:'body', type:'Widget', pro:'主体内容 wiget', code:[ {path:'flutter/app/MaterialApp/home'} ] },
		{ keyword:'backgroundColor', type:'Color', pro:'背景颜色', link:'/flutter/style/Color' },
		{ keyword:'bottomNavigationBar', type:'Widget', pro:'底部导航控件' },
		{ keyword:'bottomSheet', type:'Widget', pro:'底部展示控件', link:'/flutter/popover/BottomSheet' },
		{ keyword:'persistentFooterButtons', type:' List<Widget>', pro:'显示在支架底部的一组按钮'},
		
		{ deviceTitle:'浮动按钮配置', keyword:'floatingActionButton', type:'Widget', pro:'浮动按钮' },
		{ keyword:'floatingActionButtonAnimator', type:'FloatingActionButtonAnimator', pro:'浮动按钮动画', code:[ {path:'flutter/public/FloatingActionButtonAnimator'} ] },
		{ keyword:'floatingActionButtonLocation', type:'FloatingActionButtonLocation', pro:'决定浮动按钮放位置', code:[ {path:'flutter/public/FloatingActionButtonLocation'} ] },
		
		{ deviceTitle:'抽屉配置', keyword:'drawer', type:'Widget', pro:'抽屉', link:'/flutter/popover/Drawer' },
		{ keyword:'drawerDragStartBehavior', type:'DragStartBehavior', pro:'抽屉拖动行为', code:[{ path:'flutter/public/DragStartBehavior'}] },
		{ keyword:'drawerEdgeDragWidth', type:'double', pro:'水平滑动打开抽屉区域的宽度' },
		{ keyword:'drawerScrimColor', type:'Color', pro:'抽屉打开时用来遮盖主要内容的涂布颜色', link:'/flutter/style/Color' },
		{ keyword:'endDrawer', type:'Widget', pro:'显示在身体侧面的面板，通常隐藏在移动设备上' },
		
		{ deviceTitle:'其它配置',keyword:'extendBody', type:'bool', pro:'是否将主体扩展到支架的底部' },
		{ keyword:'extendBodyBehindAppBar', type:'bool', pro:'如果为真，并且指定了appBar，则扩展body的高度以包括app bar的高度，并且body的顶部与app bar的顶部对齐' },
		{ keyword:'primary', type:'bool', pro:'该脚手架是否显示在屏幕顶部' },
		{ keyword:'resizeToAvoidBottomInset', type:'bool', pro:'如果为真，则主体和脚手架的浮动部件应自行调整大小，以避免屏幕键盘的高度由 ambient MediaQuery的 MediaQueryData 定义' },
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }