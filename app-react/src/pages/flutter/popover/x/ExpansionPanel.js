import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'收缩面板',
	keyword:'ExpansionPanel( )',
	type:'ExpansionPanel',
	url:'ExpansionPanelPage',
	data:[
		{ 
			keyword:'headerBuilder', type:'Widget Function(BuildContext, bool)', pro:'动态创建 header 控件', 
			code:[ {path:'flutter/popover/ExpansionPanel/headerBuilder'} ],
			link:[
				{ title:'ListTile', url:'/flutter/ui/ListTile' },
			]
		},
		{ keyword:'body', type:'Widget', pro:'内容控件' },
		{ keyword:'isExpanded', type:'bool', pro:'是否展开，默认 false' },
		{ keyword:'canTapOnHeader', type:'bool', pro:'是否能够点击 header' },
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }