import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'旋转',
	isGroup:true,
	data:[
		{
			title:'x 轴旋转', keyword:'Matrix4.rotationX( )',type:'Matrix4',
			data:[
				{ keyword:'radians', type:'double', pro:'弧度', isValue:true, code:[ {path:'flutter/style/Matrix4/radians'} ] },
			]
		},
		{
			title:'y 轴旋转', keyword:'Matrix4.rotationY( )',type:'Matrix4',
			data:[
				{ keyword:'radians', type:'double', pro:'弧度', isValue:true, code:[ {path:'flutter/style/Matrix4/radians'} ] },
			]
		},
		{
			title:'z 轴旋转', keyword:'Matrix4.rotationZ( )',type:'Matrix4',
			data:[
				{ keyword:'radians', type:'double', pro:'弧度', isValue:true, code:[ {path:'flutter/style/Matrix4/radians'} ] },
			]
		},
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }