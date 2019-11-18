import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'正方形裁剪',
	keyword:'ClipRRect( )',
	type:'ClipRRect',
	url:'ClipRRectPage',
	data:[
		{ keyword:'borderRadius', type:'BorderRadius', pro:'圆角', link:'/flutter/style/borderRadius/BorderRadius'},
		{ keyword:'clipper', type:'CustomClipper<RRect>', pro:'自定义'},
		{ 
			keyword:'clipBehavior', type:'Clip', pro:'裁剪方式',
			code:[ {path:'flutter/style/Clip/Clip'} ],
			link:[{ title:'Clip', url:'/flutter/style/Clip' } ]
		
		},
		{ keyword:'child', type:'Widget', pro:'子控件' },
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }