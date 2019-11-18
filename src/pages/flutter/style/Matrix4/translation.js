import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'位移',
	isGroup:true,
	data:[
		{
			title:'位移', keyword:'Matrix4.translationValues( )',type:'Matrix4',
			data:[
				{ keyword:'x', type:'double', isValue:true, pro:'x 轴位移' },
				{ keyword:'y', type:'double', isValue:true, pro:'y 轴位移' },
				{ keyword:'z', type:'double', isValue:true, pro:'z 轴位移' },
			]
		},
		{
			title:'位移', keyword:'Matrix4.translation( )',type:'Matrix4',
			data:[
				{ keyword:'translation', type:'Vector3', isValue:true, pro:'', link:'/flutter/v/Vector3' },
			]
		},
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }