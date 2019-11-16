import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'Vector3',
	isGroup:true,
	data:[
		{ title:'', keyword:'v.Vector3.zero( )',type:'Vector3' },
		{
			title:'', keyword:'v.Vector3( )',type:'Vector3',
			data:[
				{ keyword:'x', type:'double', isValue:true, pro:'x 轴' },
				{ keyword:'y', type:'double', isValue:true, pro:'y 轴' },
				{ keyword:'z', type:'double', isValue:true, pro:'z 轴' },
			]
		}
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }