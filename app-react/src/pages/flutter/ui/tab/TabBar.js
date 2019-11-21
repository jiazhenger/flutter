import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'tab 切换栏',
	keyword:'TabBar( )',
	type:'TabBar',
	url:'TabBarPage',
	data:[
		{ 
			keyword:'tabs', type:'List<Widget>', pro:'选项按钮', 
			code:[{path:'flutter/ui/tab/TabBar/tabs'}],
			link:[{title:'Tab', url:'/flutter/ui/Tab'}]
		},
		{ keyword:'controller', type:'TabController', pro:'控制器', link:'/flutter/style/TabController' },
		{ keyword:'isScrollable', type:'bool', pro:'是否可以滚动，false：不滚动，tab 自动铺满' },
		{ keyword:'preferredSize', type:'Size', pro:'首先尺寸', link:'/flutter/style/Size' },
		{ keyword:'dragStartBehavior', type:'DragStartBehavior', pro:'拖动行为', code:[{ path:'flutter/public/DragStartBehavior'}] },
		
		{ deviceTitle:'label', keyword:'labelColor', type:'Color', pro:'选中的颜色', link:'/flutter/style/Colors' },
		{ keyword:'unselectedLabelColor', type:'Color', pro:'未先择的颜色', link:'/flutter/style/Colors' },
		{ keyword:'labelStyle', type:'TextStyle', pro:'选中的样式', link:'/flutter/style/TextStyle' },
		{ keyword:'unselectedLabelStyle', type:'TextStyle', pro:'未先择的样式', link:'/flutter/style/TextStyle' },
		{ keyword:'labelPadding', type:'EdgeInsetsGeometry', pro:'补白', link:'/flutter/style/offset/EdgeInsets' },
		
		{ deviceTitle:'指示线', keyword:'indicatorColor', type:'Color', pro:'颜色', link:'/flutter/style/Colors' },
		{ keyword:'indicatorWeight', type:'double', pro:'粗细' },
		{ keyword:'indicatorSize', type:'TabBarIndicatorSize', pro:'尺寸', code:[{path:'flutter/ui/tab/TabBar/TabBarIndicatorSize'}] },
		{ keyword:'indicatorPadding', type:'EdgeInsetsGeometry', pro:'补白', link:'/flutter/style/offset/EdgeInsets' },
		
		{ deviceTitle:'事件', keyword:'onTap', type:'void Function( int )', pro:'点击时执行', code:[{path:'flutter/ui/tab/onTap'}] },
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }