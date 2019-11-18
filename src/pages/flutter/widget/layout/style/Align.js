import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'水平垂直对齐',
	keyword:'Align( )',
	type:'Align',
	data:[
		{ keyword:'widthFactor', type:'double', pro:'宽度是child的倍数' },
		{ keyword:'heightFactor', type:'double', pro:'高度是child的倍数' },
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