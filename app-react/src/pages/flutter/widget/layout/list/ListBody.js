import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'顺序排列控件',
	keyword:'ListBody( )',
	type:'ListBody',
	url:'ListBodyPage',
	data:[
		{ keyword:'mainAxis', type:'Axis', pro:'排列方向，默认垂直', code:[ {path:'flutter/widget/layout/list/Wrap/Axis'} ] },
		{ keyword:'reverse', type:'bool', pro:'是否倒序' },
		
		
		{ keyword:'children', type:'List<Widget>', pro:'列表控件，所有控件会重合在一起', code:[ {path:'flutter/public/widget-children'} ]  }
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }