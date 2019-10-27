import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'四边样式',
	keyword:'Border',
	data:[
		{ 
			keyword:'Border.all(double width, Color color, BorderStyle style)', 
			type:'Border', 
			pro:'四边样式', 
			code:[ {path:'flutter/style/border/Border/all'} ],
			link:[ {title:'Color',url:'/flutter/style/Colors'} ],
			url:'BorderAll'
		},
		{ 
			keyword:'Border( BorderSide left, BorderSide top, BorderSide right, BorderSide bottom  )', 
			type:'Border', 
			pro:'单边样式', 
			code:[ {path:'flutter/style/border/Border/one'} ],
			link:[ {title:'BorderSide',url:'/flutter/style/border/BorderSide'} ],
			url:'BorderOne'
		},
		{ keyword:'Border.merge(BorderSide a, BorderSide b)', type:'BorderStyle', pro:'', code:[ {path:'flutter/style/border/Border/merge'} ], url:'BorderSideMerge' },
		{ keyword:'BorderSide.lerp(Border a, Border b, double t)', type:'BorderStyle', pro:'', code:[ {path:'flutter/style/border/Border/lerp'} ] },
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }