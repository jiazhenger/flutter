import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'设置本身盒子的尺寸',
	keyword:'SizedOverflowBox( )',
	type:'SizedOverflowBox',
	data:[
		{ keyword:'size', type:'Size', pro:'尺寸大小', link:'/flutter/style/Size' },
		{ 
			keyword:'alignment', type:'Alignment', pro:'对齐方式',
			code:[ {path:'flutter/public/alignment'} ],
			link:[
				{ title:'Alignment', url:'/flutter/style/align/Alignment'},
				{ title:'FractionalOffset', url:'/flutter/style/align/FractionalOffset'},
			]	
		},
		{ keyword:'child', type:'Widget', pro:'控件' }
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }