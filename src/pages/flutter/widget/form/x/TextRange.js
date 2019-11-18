import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'选择文本的范围',
	isGroup:true,
	data:[
		{
			title:'范围空',
			keyword:'TextRange.empty',
			type:'TextRange',
			data:[
			]
		},
		{
			title:'文本选择',
			keyword:'TextRange.collapsed( )',
			type:'TextRange',
			data:[
				{ keyword:'offset', type:'int', pro:'偏移', isValue:true, code:[{ path:'flutter/widget/form/TextFormField/x/TextRangeOffset'}] },
			]
		},
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }