import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'TimeOfDay',
	isGroup:true,
	data:[
		{
			title:'时长', grayText:'const', keyword:'TimeOfDay( )', type:'TimeOfDay',
			data:[
				{ keyword:'hour', type:'int', pro:'小时数' },
				{ keyword:'minute', type:'int', pro:'分钟数 ' },
			]
		},
		{ title:'现在时间', grayText:'const', keyword:'TimeOfDay.now( )', type:'TimeOfDay' },
		{ 
			title:'将 DateTime 转为 TimeOfDay', grayText:'const', keyword:'TimeOfDay.fromDateTime( )', type:'TimeOfDay',
			data:[
				{ keyword:'time', type:'DateTime', pro:'DateTime 类', isValue:true, link:'/dart/time/DateTime' },
			]
		},
		{ title:'一个周期多少小时 => 12', grayText:'const', keyword:'TimeOfDay.hoursPerPeriod', type:'int' },
		{ title:'每天钟多少小时 => 24', grayText:'const', keyword:'TimeOfDay.hoursPerDay', type:'int' },
		{ title:'每小时多少分钟 => 60', grayText:'const', keyword:'TimeOfDay.minutesPerHour', type:'int' },
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }