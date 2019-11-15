import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'对child控件进行缩放和对齐方式的设置',
	keyword:'FittedBox( )',
	type:'FittedBox',
	url:'FittedBoxPage',
	data:[
		{ 
			keyword:'fit', type:'BoxFit', pro:'填充方式',
			code:[ {path:'flutter/widget/image/style/x/fit'} ],
			link:[
				{ title:'BoxFit', url:'/flutter/image/BoxFit' },
			]
		},
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