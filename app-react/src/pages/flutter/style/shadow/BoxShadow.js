import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'阴影',
	keyword:'BoxShadow( )',
	url:'BoxShadowPage',
	data:[
		{ keyword:'color', type:'Color', pro:'颜色', link: '/flutter/style/Colors' },
		{ keyword:'offset', type:'Offset', pro:'偏移', link:'/flutter/style/offset/Offset' },
		{ keyword:'blurRadius', type:'double', pro:'模糊度' },
		{ keyword:'spreadRadius', type:'double', pro:'扩展度' },
//		{ deviceTitle:'其它属性', noOrder:true, keyword:'BoxShadow.lerp(BoxShadow a, BoxShadow b, double t)', type:'BoxShadow', isGray:true, code:[ {path:'flutter/style/shadow/BoxShadow/lerp'} ] },
//		{ noOrder:true, keyword:'BoxShadow.lerpList(List<BoxShadow> a, List<BoxShadow> b, double t)', type:'BoxShadow', isGray:true, code:[ {path:'flutter/style/shadow/BoxShadow/lerpList'} ] },
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }