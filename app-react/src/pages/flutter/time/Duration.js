import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'Duration',
	isGroup:true,
	data:[
		{
			title:'时长',
			keyword:'const Duration( )',
			type:'Duration',
			data:[
				{ keyword:'days', type:'int', pro:'天数' },
				{ keyword:'hours', type:'int', pro:'小时数' },
				{ keyword:'minutes', type:'int', pro:'分钟数 ' },
				{ keyword:'seconds', type:'int', pro:'秒数 ' },
				{ keyword:'milliseconds', type:'int', pro:'毫秒数 ' },
				{ keyword:'microseconds', type:'int', pro:'微秒数 ' },
				
				{ noOrder:true, pro:'用法', code:[ {path:'dart/time/Duration/Duration'} ] },
			]
		}
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }