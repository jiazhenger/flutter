import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'solve',
	isGroup:true,
	data:[
		{
			title:'', keyword:'Matrix4.solve( )',type:'Matrix4',
			data:[
				{ keyword:'A', type:'Matrix4', isValue:true, pro:'' },
				{ keyword:'x', type:'Vector4', isValue:true, pro:'', link:'/flutter/v/Vector4' },
				{ keyword:'b', type:'Vector4', isValue:true, pro:'', link:'/flutter/v/Vector4' },
			]
		},
		{
			title:'', keyword:'Matrix4.solve2( )',type:'Matrix4',
			data:[
				{ keyword:'A', type:'Matrix4', isValue:true, pro:'' },
				{ keyword:'x', type:'Vector2', isValue:true, pro:'', link:'/flutter/v/Vector2' },
				{ keyword:'b', type:'Vector2', isValue:true, pro:'', link:'/flutter/v/Vector2' },
			]
		},
		{
			title:'', keyword:'Matrix4.solve3( )',type:'Matrix4',
			data:[
				{ keyword:'A', type:'Matrix4', isValue:true, pro:'' },
				{ keyword:'x', type:'Vector3', isValue:true, pro:'', link:'/flutter/v/Vector3' },
				{ keyword:'b', type:'Vector3', isValue:true, pro:'', link:'/flutter/v/Vector3' },
			]
		},
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }