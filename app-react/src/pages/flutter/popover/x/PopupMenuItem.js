import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'弹出式菜单列表',
	keyword:'PopupMenuItem( )',
	type:'PopupMenuItem',
	data:[
		{ keyword:'value', type:'T', pro:'任意数据类型' },
		{ keyword:'height', type:'double', pro:'每行高度' },
		{ keyword:'enabled', type:'bool', pro:'启用/禁用' },
		{ keyword:'child', type:'Widget', pro:'控件'},
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }