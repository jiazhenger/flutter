import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'缩放',
	isGroup:true,
	data:[
		{
			title:'缩放', keyword:'Matrix4.diagonal3Values( )',type:'Matrix4',
			data:[
				{ keyword:'x', type:'double', isValue:true, pro:'x 轴缩放' },
				{ keyword:'y', type:'double', isValue:true, pro:'y 轴缩放' },
				{ keyword:'z', type:'double', isValue:true, pro:'z 轴缩放' },
			]
		},
		{
			title:'缩放', keyword:'Matrix4.diagonal3( )',type:'Matrix4',
			data:[
				{ keyword:'scale', type:'Vector3', isValue:true, pro:'', link:'/flutter/v/Vector3' },
			]
		},
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }