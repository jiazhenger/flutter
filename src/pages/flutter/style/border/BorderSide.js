import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'单边样式',
	isGroup:true,
	data:[
		{ title:'无', grayText:'const', keyword:'BorderSide.zero', type:'Offset' },
		{
			title:'边样式',
			grayText:'const',
			keyword:'BorderSide( )',
			type:'BorderSide',
			url:'BorderSidePage',
			data:[
				{ keyword:'color', type:'Color', pro:'颜色', link:'/flutter/style/Colors'},
				{ keyword:'width', type:'double', pro:'宽度'},
				{ 
					keyword:'style', type:'BorderStyle', pro:'边框样式',
					code:[ {path:'flutter/public/borderStyle'} ],
				},
			]
		},
		{
			title:'合并边框',
			keyword:'BorderSide.merge( )',
			type:'BorderSide',
			url:'BorderSideMerge',
			data:[
				{ keyword:'a', type:'BorderSide', pro:'一个边', isValue:true },
				{ keyword:'b', type:'BorderSide', pro:'一个边', isValue:true },
				{ noOrder:true, pro:'示例', code:[ {path:'flutter/style/border/BorderSide/merge'} ] },
			]
		},
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }