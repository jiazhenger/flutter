import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'圆角值',
	isGroup:true,
	data:[
		{ title:'无圆角', keyword:'Radius.zero', type:'Radius' },
		{
			title:'圆角',
			keyword:'Radius.circular( )',
			type:'Radius',
			data:[
				{ keyword:'radius', type:'double', pro:'圆角值', isValue:true },
			],
		},
		{
			title:'圆角',
			keyword:'Radius.elliptical( )',
			type:'Radius',
			data:[
				{ keyword:'x', type:'double', pro:'', isValue:true },
				{ keyword:'y', type:'double', pro:'', isValue:true },
				{ noOrder:true, pro:'示例', code:[ {path:'flutter/style/borderRadius/Radius/elliptical'} ] },
			]
		},
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }