import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'水平与垂直偏移量',
	isGroup:true,
	data:[
		{ title:'无偏移', keyword:'Offset.zero', type:'Offset' },
		{ title:'无限偏移', keyword:'Offset.infinite', type:'Offset' },
		{
			title:'偏移',
			keyword:'Offset( )',
			type:'Offset',
			data:[
				{ keyword:'dx', type:'double', pro:'垂直偏移', isValue:true},
				{ keyword:'dy', type:'double', pro:'水平偏移', isValue:true, code:[ {path:'flutter/style/offset/Offset/Offset'} ]},
			]
		},
		{
			title:'偏移',
			keyword:'Offset.fromDirection( )',
			type:'Offset',
			data:[
				{ keyword:'direction', type:'double', pro:'方向', isValue:true},
				{ keyword:'[ distance = 1.0 ]', type:'double', pro:'距离', isValue:true, code:[ {path:'flutter/style/offset/Offset/fromDirection'} ]}
			]
		},
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }