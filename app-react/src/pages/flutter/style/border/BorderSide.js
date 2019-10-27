import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'单样式',
	keyword:'BorderSide',
	data:[
		{ keyword:'BorderSide.none', type:'BorderSide', pro:'无边框', code:[ {path:'flutter/style/border/BorderSide/none'} ] },
		{ 
			keyword:'BorderSide( double width, Color color, BorderStyle style  )', 
			type:'BorderSide', 
			pro:'边样式', 
			code:[ {path:'flutter/style/border/BorderSide/BorderSide'} ],
			link:[ {title:'Color',url:'/flutter/style/Colors'} ],
			url:'BorderSidePage'
		},
		{ keyword:'BorderSide.merge(BorderSide a, BorderSide b)', type:'BorderStyle', pro:'', code:[ {path:'flutter/style/border/BorderSide/merge'} ], url:'BorderSideMerge' },
		{ keyword:'BorderSide.lerp(BorderSide a, BorderSide b, double t)', type:'BorderStyle', pro:'', code:[ {path:'flutter/style/border/BorderSide/lerp'} ] },
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }