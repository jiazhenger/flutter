import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'隐藏超出部分',
	keyword:'OverflowBox( )',
	type:'OverflowBox',
	data:[
		{ keyword:'minWidth', type:'double', pro:'最小宽度' },
		{ keyword:'minHeight', type:'double', pro:'最小高度' },
		{ keyword:'maxWidth', type:'double', pro:'最大宽度' },
		{ keyword:'maxHeight', type:'double', pro:'最大高度' },
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