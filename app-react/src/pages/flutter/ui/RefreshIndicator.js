import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'刷新小部件',
	keyword:'RefreshIndicator( )',
	type:'RefreshIndicator',
	url:'RefreshIndicatorPage',
	data:[
		{ keyword:'color', type:'Color', pro:'颜色', link:'/flutter/style/Colors' },
		{ keyword:'backgroundColor', type:'Color', pro:'背景颜色', link:'/flutter/style/Colors' },
		{ keyword:'displacement', type:'double', pro:'移位距离' },
		{ keyword:'child', type:'Widget', pro:'控件' },
		{ keyword:'semanticsLabel', type:'String', pro:'语义描述标签', code:[ {path:'flutter/public/semanticsLabel'} ]},
		{ keyword:'semanticsValue ', type:'String', pro:'语义描述值'},
		{ keyword:'notificationPredicate', type:'bool Function(ScrollNotification)', pro:'', code:[ {path:'flutter/ui/RefreshIndicator/notificationPredicate'} ]},
		{ 
			keyword:'onRefresh', type:'Future<void> Function()', pro:'', 
			code:[ {path:'flutter/ui/RefreshIndicator/onRefresh'}],
			link:[ { title:'Future', url:'/flutter/style/Future' }]
		},
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }