import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'时间选择器',
	keyword:'showTimePicker( )',
	type:'showTimePicker',
	url:'showTimePickerPage',
	data:[
		{ keyword:'context', type:'BuildContext', pro:'' },
		{ keyword:'initialTime', type:'TimeOfDay', pro:'当前默认时间', link:[{ title:'Theme', url:'/flutter/time/TimeOfDay' }] },
		
		{ 
			noOrder:true, pro:'示例', 
			code:[ {path:'flutter/widget/Form/showTimePicker/showTimePicker'} ],
			link:[
				{ title:'MaterialButton', url:'/flutter/button/MaterialButton' },
				{ title:'TimeOfDay', url:'/flutter/time/TimeOfDay' },
			]
		},
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }