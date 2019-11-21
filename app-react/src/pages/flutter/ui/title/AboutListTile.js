import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'关于我们的列表标题',
	keyword:'AboutListTile( )',
	type:'AboutListTile',
	url:'AboutListTilePage',
	data:[
		{ deviceTitle:'列表设置', keyword:'icon', type:'Widget', pro:'列表左侧 icon' },
		{ keyword:'child', type:'widget', pro:'列表标题' },
		{ deviceTitle:'弹窗设置', keyword:'applicationIcon', type:'Widget', pro:'图标' },
		{ keyword:'applicationName', type:'String', pro:'主标题' },
		{ keyword:'applicationVersion', type:'String', pro:'副标题' },
		{ keyword:'applicationLegalese', type:'String', pro:'次标题' },
		{ keyword:'aboutBoxChildren', type:'List<Widget>', pro:'副图片', code:[ {path:'flutter/public/widget-children'} ] },
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }