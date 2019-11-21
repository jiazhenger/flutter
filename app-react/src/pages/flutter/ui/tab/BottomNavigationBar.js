import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'tab 导航',
	keyword:'BottomNavigationBar( )',
	type:'BottomNavigationBar',
	url:'BottomNavigationBarPage',
	data:[
		{ 
			keyword:'items', type:'List<BottomNavigationBarItem>', pro:'选项按钮', 
			code:[{path:'flutter/ui/tab/BottomNavigationBar/items'}],
			link:[{title:'BottomNavigationBarItem', url:'/flutter/style/BottomNavigationBarItem'}]
		},
		{ keyword:'currentIndex', type:'int', pro:'当前索引值，默认 0' },
		{ keyword:'elevation', type:'double', pro:'阴影' },
		{ keyword:'type', type:'BottomNavigationBarType', pro:'类型', code:[{path:'flutter/ui/tab/BottomNavigationBar/BottomNavigationBarType'}] },
		{ keyword:'fixedColor', type:'Color', pro:'当前tab文字颜色', link:'/flutter/style/Colors' },
		{ keyword:'backgroundColor', type:'Color', pro:'整个背景颜色', link:'/flutter/style/Colors' },
		
		{ deviceTitle:'tab color 设置', keyword:'selectedItemColor', type:'Color', pro:'当前tab文字颜色，与 fixedColor 互斥', link:'/flutter/style/Colors' },
		{ keyword:'unselectedItemColor', type:'Color', pro:'非当前tab文字颜色', link:'/flutter/style/Colors' },
		
		{ deviceTitle:'tab icon 设置', keyword:'iconSize', type:'double', pro:'icon 尺寸' },
		{ keyword:'selectedIconTheme', type:'IconThemeData', pro:'当前 icon 主题', link:'/flutter/style/IconThemeData' },
		{ keyword:'unselectedIconTheme', type:'IconThemeData', pro:'非当前 icon 主题', link:'/flutter/style/IconThemeData'  },
		
		{ deviceTitle:'tab 字体设置', keyword:'selectedFontSize', type:'double', pro:'当前tab文字大小'},
		{ keyword:'unselectedFontSize', type:'double', pro:'非当前tab文字大小'},
		
		{ deviceTitle:'label 设置', keyword:'selectedLabelStyle', type:'TextStyle', pro:'当前tab文本样式'},
		{ keyword:'unselectedLabelStyle', type:'TextStyle', pro:'非当前tab文本样式'},
		{ keyword:'showSelectedLabels', type:'bool', pro:'是否显示当前 tab 的 labels'},
		{ keyword:'showUnselectedLabels', type:'bool', pro:'是否显示非当前 tab 的 labels'},
		
		{ deviceTitle:'事件', keyword:'onTap', type:'void Function( int )', pro:'点击时执行', code:[{path:'flutter/ui/tab/onTap'}] },
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }