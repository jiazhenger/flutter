import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'收缩面板',
	keyword:'ExpansionPanelList( )',
	type:'ExpansionPanelList',
	url:'ExpansionPanelListPage',
	data:[
		{ keyword:'animationDuration', type:'Duration', pro:'动画过渡时长', link:'/flutter/time/Duration' },
		{ keyword:'children', type:'List<ExpansionPanel>', pro:'面版内容列表' },
		{ keyword:'expansionCallback', type:'void Function(int, bool)', pro:'控件展开与收缩', code:[ {path:'flutter/popover/ExpansionPanelList/expansionCallback'} ] },
		
		
		{ 
			noOrder:true, pro:'示例', 
			code:[ {path:'flutter/popover/ExpansionPanelList/ExpansionPanelList'} ],
			link:[
				{ title:'ExpansionPanel', url:'/flutter/popover/ExpansionPanel' },
				{ title:'ListTile', url:'/flutter/ui/ListTile' },
				{ title:'Padding', url:'/flutter/layout/Padding' },
				{ title:'ListBody', url:'/flutter/layout/ListBody' },
				
			]
		}
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }