import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'Vector2',
	isGroup:true,
	data:[
		{ title:'', keyword:'v.Vector2.zero( )',type:'Vector2' },
		{
			title:'', keyword:'v.Vector2( )',type:'Vector2',
			data:[
				{ keyword:'x', type:'double', isValue:true, pro:'x 轴' },
				{ keyword:'y', type:'double', isValue:true, pro:'y 轴' },
			]
		}
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }