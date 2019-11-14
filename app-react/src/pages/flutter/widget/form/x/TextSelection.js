import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'文本选择',
	isGroup:true,
	data:[
		{
			title:'文本选择',
			keyword:'TextSelection.collapsed( )',
			type:'TextSelection',
			data:[
				{ keyword:'offset', type:'int', pro:'偏移' },
				{ keyword:'affinity', type:'TextAffinity', pro:'', code:[{ path:'flutter/widget/form/TextFormField/x/TextAffinity'}] },
			]
		},
		{
			title:'文本选择',
			keyword:'TextSelection.fromPosition( )',
			type:'TextSelection',
			data:[
				{ 
					keyword:'position', type:'TextPosition', pro:'选择定位', isValue:true, 
					code:[{ path:'flutter/widget/form/TextFormField/x/TextPosition'}],
					link:[{ title:'TextPosition', url:'/flutter/form/TextPosition' }]
				},
			]
		},
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }