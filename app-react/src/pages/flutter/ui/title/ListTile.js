import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'标题',
	keyword:'ListTile( )',
	type:'ListTile',
	url:'ListTilePage',
	data:[
		{ keyword:'title', type:'widget', pro:'主标题' },
		{ keyword:'subtitle', type:'widget', pro:'副标题' },
		{ keyword:'leading', type:'widget', pro:'最左侧部分' },
		{ keyword:'trailing', type:'widget', pro:'最右侧部分' },
		
		{ keyword:'contentPadding', type:'EdgeInsetsGeometry', pro:'补白', link:'/flutter/style/offset/EdgeInsets' },
		{ keyword:'isThreeLine', type:'bool', pro:'是否显示三行' },
		{ keyword:'dense', type:'bool', pro:'是否减少高度' },
		{ keyword:'enabled', type:'bool', pro:'是否启用、激活' },
		{ keyword:'selected', type:'bool', pro:'是否选中' },
		{ keyword:'onTap', type:'void Function( )', pro:'点击', code:[ {path:'flutter/event/onTap'} ] },
		{ keyword:'onLongPress', type:'void Function( )', pro:'长按', code:[ {path:'flutter/event/onLongPress'} ] },
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }