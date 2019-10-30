import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'圆角矩形或椭圆',
	keyword:'RoundedRectangleBorder( )',
	url:'RoundedRectangleBorderPage',
	data:[
		{ keyword:'side', type:'BorderSide', pro:'边框样式', link:'/flutter/style/border/BorderSide' },
		{ keyword:'borderRadius', type:'BorderRadius', pro:'圆角', link:'/flutter/style/borderRadius/BorderRadius' },
		{ noOrder:true, pro:'示例', code:[ {path:'flutter/style/shape/RoundedRectangleBorder'} ] },
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }