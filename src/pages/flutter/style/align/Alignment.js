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
			keyword:'Alignment.x',
			type:'Alignment',
			url:'AlignmentPosition',
			data:[
				{ keyword:'topLeft', pro:'水平居左，垂直居上' },
				{ keyword:'topCenter', pro:'水平居中，垂直居上' },
				{ keyword:'topRight', pro:'水平居右，垂直居上' },
				{ keyword:'centerLeft', pro:'水平居左，垂直居中' },
				{ keyword:'center', pro:'水平居中，垂直居中' },
				{ keyword:'centerRight', pro:'水平居右，垂直居中' },
				{ keyword:'bottomLeft', pro:' 水平居左，垂直居下' },
				{ keyword:'bottomCenter', pro:'水平居中，垂直居下' },
				{ keyword:'bottomRight', pro:'水平居右，垂直居下' },
				{ noOrder:true, pro:'示例', code:[ {path:'flutter/style/align/Alignment/position'} ] },
			]
		},
		{
			title:'自定义对齐',
			keyword:'Alignment( )',
			type:'Alignment',
			url:'AlignmentXY',
			data:[
				{ keyword:'x', type:'double', pro:'水平对齐', isValue:true },
				{ keyword:'y', type:'double', pro:'垂直对齐', isValue:true },
				{ noOrder:true, pro:'示例', code:[ {path:'flutter/style/align/Alignment/xy'} ] },
			]
		},
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }