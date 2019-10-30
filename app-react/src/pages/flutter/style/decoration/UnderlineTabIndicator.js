import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'下划线',
	keyword:'UnderlineTabIndicator( )',
	url:'UnderlineTabIndicatorPage',
	data:[
		{ keyword:'borderSide', type:'BorderSide', pro:'底边', link:'/flutter/style/border/BorderSide' },
		{ keyword:'insets', type:'EdgeInsets', pro:'偏移', link:'/flutter/style/offset/EdgeInsets' },
		{ noOrder:true, pro:'示例', code:[ {path:'flutter/style/decoration/UnderlineTabIndicator/UnderlineTabIndicator'} ] },
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }