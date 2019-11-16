import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'Vector4',
	isGroup:true,
	data:[
		{ title:'', keyword:'v.Vector4.zero( )',type:'Vector4' },
		{
			title:'', keyword:'v.Vector4( )',type:'Vector4',
			data:[
				{ keyword:'x', type:'double', isValue:true, pro:'x 轴' },
				{ keyword:'y', type:'double', isValue:true, pro:'y 轴' },
				{ keyword:'z', type:'double', isValue:true, pro:'z 轴' },
				{ keyword:'w', type:'double', isValue:true, pro:'宽度' },
			]
		}
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }