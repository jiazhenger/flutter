import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'对齐方式',
	isGroup:true,
	data:[
		{
			title:'对齐方式',
			keyword:'AlignmentDirectional.x',
			type:'AlignmentDirectional',
			data:[
				{ keyword:'topStart', pro:'水平居左，垂直居上' },
				{ keyword:'topCenter', pro:'水平居中，垂直居上' },
				{ keyword:'topEnd', pro:'水平居右，垂直居上' },
				{ keyword:'centerStart', pro:'水平居左，垂直居中' },
				{ keyword:'center', pro:'水平居中，垂直居中' },
				{ keyword:'centerEnd', pro:'水平居右，垂直居中' },
				{ keyword:'bottomStart', pro:' 水平居左，垂直居下' },
				{ keyword:'bottomCenter', pro:'水平居中，垂直居下' },
				{ keyword:'bottomEnd', pro:'水平居右，垂直居下' },
				{ noOrder:true, pro:'示例', code:[ {path:'flutter/style/align/AlignmentDirectional/position'} ] },
			]
		},
		{
			title:'自定义对齐',
			keyword:'AlignmentDirectional( )',
			type:'AlignmentDirectional',
			data:[
				{ keyword:'start', type:'double', pro:'水平对齐', isValue:true },
				{ keyword:'y', type:'double', pro:'垂直对齐', isValue:true },
				{ noOrder:true, pro:'示例', code:[ {path:'flutter/style/align/AlignmentDirectional/xy'} ] },
			]
		},
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }