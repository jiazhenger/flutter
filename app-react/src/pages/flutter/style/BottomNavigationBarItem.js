import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'底部菜单的选项', keyword:'BottomNavigationBarItem',type:'BottomNavigationBarItem',
	data:[
		{ keyword:'icon', type:'Widget', pro:'图标' },
		{ keyword:'activeIcon', type:'Widget', pro:'当前选项的图标' },
		{ keyword:'title', type:'String', pro:'标题' },
		{ keyword:'backgroundColor', type:'Color', pro:'背景颜色', link:'/flutter/style/Colors' },
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }