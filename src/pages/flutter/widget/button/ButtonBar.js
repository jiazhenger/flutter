import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'水平排列的按钮组',
	keyword:'ButtonBar( )',
	type:'ButtonBar',
	url:'ButtonBarPage',
	data:[
		{ keyword:'alignment', type:'MainAxisAlignment', pro:'水平对齐方式', code:[ {path:'flutter/public/MainAxisAlignment'} ] },
		{ keyword:'mainAxisSize', type:'MainAxisSize', pro:'主轴尺寸', code:[ {path:'flutter/public/mainAxisSize'} ] },
		{ keyword:'children', type:'List<Widget>', pro:'列表控件', code:[ {path:'flutter/public/widget-children'} ]  }
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }