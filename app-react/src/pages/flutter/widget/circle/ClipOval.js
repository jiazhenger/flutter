import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'椭圆形裁剪',
	keyword:'ClipOval( )',
	type:'ClipOval',
	url:'ClipOvalPage',
	data:[
		{ keyword:'clipper', type:'CustomClipper<Rect>', pro:'自定义'},
		{ 
			keyword:'clipBehavior', type:'Clip', pro:'裁剪方式',
			code:[ {path:'flutter/style/Clip/Clip'} ],
			link:[{ title:'Clip', url:'/flutter/style/Clip' } ]
		
		},
		{ keyword:'child', type:'Widget', pro:'子控件' },
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }