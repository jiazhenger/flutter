import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'扭曲',
	isGroup:true,
	data:[
		{
			title:'x、y 轴扭曲', keyword:'Matrix4.skew( )',type:'Matrix4',
			data:[
				{ keyword:'alpha', type:'double', pro:'', isValue:true, code:[ {path:'flutter/style/Matrix4/radians'} ] },
				{ keyword:'beta', type:'double', pro:'', isValue:true },
			]
		},
		{
			title:'x 轴扭曲', keyword:'Matrix4.skewX( )',type:'Matrix4',
			data:[
				{ keyword:'beta', type:'double', pro:'弧度', isValue:true, code:[ {path:'flutter/style/Matrix4/radians'} ] },
			]
		},
		{
			title:'y 轴扭曲', keyword:'Matrix4.skewY( )',type:'Matrix4',
			data:[
				{ keyword:'beta', type:'double', pro:'弧度', isValue:true, code:[ {path:'flutter/style/Matrix4/radians'} ] },
			]
		},
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }