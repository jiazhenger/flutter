import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'标题下拉展开',
	keyword:'ExpansionTile( )',
	type:'ExpansionTile',
	url:'ExpansionTilePage',
	data:[
		{ keyword:'title', type:'widget', pro:'主标题' },
		{ keyword:'leading', type:'widget', pro:'最左侧部分' },
		{ keyword:'trailing', type:'widget', pro:'最右侧部分' },
		
		{ keyword:'backgroundColor', type:'Color', pro:'背景色', link:'/flutter/style/Colors' },
		{ keyword:'initiallyExpanded', type:'bool', pro:'是否默认展开' },
		
		{ keyword:'children', type:'List<Widget>', pro:'列表控件', code:[ {path:'flutter/public/widget-children'} ]  },
		{ keyword:'onExpansionChanged', type:'void Function( bool )', pro:'展开或关闭时执行', code:[ {path:'flutter/event/onExpansionChanged'} ] },
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }