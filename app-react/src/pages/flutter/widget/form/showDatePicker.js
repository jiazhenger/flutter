import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'日期选择器',
	keyword:'showDatePicker( )',
	type:'showDatePicker',
	url:'ShowDatePickerPage',
	data:[
		{ keyword:'initialDate', type:'DateTime', pro:'当前默认时间' },
		{ keyword:'firstDate', type:'DateTime', pro:'开始时间' },
		{ keyword:'lastDate', type:'DateTime', pro:'结束时间' },
		{ keyword:'context', type:'BuildContext', pro:'' },
		
		{ keyword:'initialDatePickerMode', type:'DatePickerMode', pro:'选择器类型', code:[{path:'flutter/widget/Form/showDatePicker/DatePickerMode'}] },
		{ 
			keyword:'builder', type:'Widget Function(BuildContext, Widget)', pro:'配置主题', 
			code:[ {path:'flutter/widget/Form/showDatePicker/builder'} ],
			link:[{ title:'Theme', url:'/flutter/app/Theme' }]
		},
		
		{ keyword:'locale', type:'Locale', pro:'语言', link:'/flutter/style/locale/Locale' },
		{ keyword:'textDirection', type:'TextDirection', pro:'排列顺序', code:[ {path:'flutter/widget/text/TextDirection'} ] },
		
		{ keyword:'selectableDayPredicate', type:'bool Function( DateTime )', pro:'可选择的时间', code:[{path:'flutter/widget/Form/showDatePicker/selectableDayPredicate'}] },
		{ 
			noOrder:true, pro:'示例', 
			code:[ {path:'flutter/widget/Form/showDatePicker/showDatePicker'} ],
			link:[
				{ title:'MaterialButton', url:'/flutter/button/MaterialButton' },
				{ title:'Theme', url:'/flutter/app/Theme' },
				{ title:'DateTime', url:'/dart/time/DateTime' },
			]
		},
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }