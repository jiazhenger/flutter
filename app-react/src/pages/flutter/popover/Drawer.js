import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'抽屉',
	keyword:'Drawer( )',
	type:'Drawer',
	url:'DrawerPage',
	data:[
		{ keyword:'elevation', type:'double', pro:'阴影' },
		{ keyword:'semanticsLabel', type:'String', pro:'语义描述标签' },
		{ keyword:'child', type:'widget', pro:'控件' },
		{ noOrder:true, pro:'示例', code:[{path:'flutter/popover/Drawer/Drawer'}] }
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }