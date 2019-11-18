import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'TimeOfDay',
	isGroup:true,
	data:[
		{
			title:'时长',
			grayText:'const',
			keyword:'TimeOfDay( )',
			type:'TimeOfDay',
			data:[
				{ keyword:'hour', type:'int', pro:'小时数' },
				{ keyword:'minute', type:'int', pro:'分钟数 ' },
			]
		},
		{
			title:'零',
			grayText:'const',
			keyword:'Duration.zero',
			type:'TimeOfDay',
		},
		{
			title:'现在时间',
			grayText:'const',
			keyword:'Duration.now()',
			type:'TimeOfDay',
		}
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }