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
			grayText:'const',
			keyword:'Duration( )',
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
		},
		{ title:'零', grayText:'const', keyword:'Duration.zero', type:'Duration' },
		{ title:'每天多少小时 => 24', grayText:'const', keyword:'Duration.hoursPerDay', type:'int' },
		{ title:'每天多少分钟 => 1440', grayText:'const', keyword:'Duration.minutesPerDay', type:'int' },
		{ title:'每天多少秒 => 86400', grayText:'const', keyword:'Duration.secondsPerDay', type:'int' },
		{ title:'每天多少毫秒 => 86400000', grayText:'const', keyword:'Duration.millisecondsPerDay', type:'int' },
		{ title:'每天多少微秒 => 86400000000', grayText:'const', keyword:'Duration.millisecondsPerDay', type:'int' },
		
		{ title:'每小时多少分钟 => 60', grayText:'const', keyword:'Duration.minutesPerHour', type:'int' },
		{ title:'每小时多少秒 => 3600', grayText:'const', keyword:'Duration.secondsPerHour', type:'int' },
		{ title:'每小时多少毫秒 => 3600000', grayText:'const', keyword:'Duration.millisecondsPerHour', type:'int' },
		{ title:'每小时多少微秒 => 3600000000', grayText:'const', keyword:'Duration.microsecondsPerHour', type:'int' },
		
		{ title:'每分钟多少分秒 => 60', grayText:'const', keyword:'Duration.secondsPerMinute', type:'int' },
		{ title:'每分钟多少毫秒 => 60000', grayText:'const', keyword:'Duration.millisecondsPerMinute', type:'int' },
		{ title:'每分钟多少微秒 => 60000000', grayText:'const', keyword:'Duration.microsecondsPerMinute', type:'int' },
		
		{ title:'每秒多少毫秒 => 1000', grayText:'const', keyword:'Duration.millisecondsPerSecond', type:'int' },
		{ title:'每秒多少微秒 => 1000000', grayText:'const', keyword:'Duration.microsecondsPerSecond', type:'int' },
		
		{ title:'每毫秒多少微秒 => 1000', grayText:'const', keyword:'Duration.microsecondsPerMillisecond', type:'int' },
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }