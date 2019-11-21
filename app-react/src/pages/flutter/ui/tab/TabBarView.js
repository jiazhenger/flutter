import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'tab 切换内容',
	keyword:'TabBarView( )',
	type:'TabBarView',
	url:'TabBarViewPage',
	data:[
		{ keyword:'controller', type:'TabController', pro:'控制器', link:'/flutter/style/TabController' },
		{ keyword:'children', type:'List<Widget>', pro:'列表控件', code:[ {path:'flutter/public/widget-children'} ]  },
		{ keyword:'physics', type:'ScrollPhysics', pro:'响应用户输入', code:[{ path:'flutter/public/ScrollPhysics'}] },
		{ keyword:'dragStartBehavior', type:'DragStartBehavior', pro:'拖动行为', code:[{ path:'flutter/public/DragStartBehavior'}] },
		{ 
			noOrder:true ,pro:'示例', 
			code:[{ path:'flutter/ui/tab/TabBarView/TabBarView'}],
			link:[
				{title:'TabController',url:'/flutter/style/TabController'},
				{title:'TabBar',url:'/flutter/ui/TabBar'},
				{title:'Tab',url:'/flutter/ui/Tab'},
				{title:'Column',url:'/flutter/layout/Column'},
				{title:'Expanded',url:'/flutter/layout/Expanded'},
				{title:'Container',url:'/flutter/layout/Container'},
			]
		},
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }