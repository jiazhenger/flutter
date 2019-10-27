import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'圆角值',
	data:[
		{ keyword:'BorderRadius.zero', type:'BorderRadius', pro:'无圆角', code:[ {path:'flutter/style/borderRadius/BorderRadius/zero'} ] },
		{ 
			keyword:'BorderRadius.all(Radius radius)', 
			type:'BorderRadius', 
			pro:'四角圆角', 
			code:[ {path:'flutter/style/borderRadius/BorderRadius/all'} ],
			link:[ {title:'Radius',url:'/flutter/style/borderRadius/Radius'} ],
			url:'BorderRadiusAll' 
		},
		{ 
			keyword:'BorderRadius.circular(double radius)', 
			type:'BorderRadius', 
			pro:'四角圆角', 
			code:[ {path:'flutter/style/borderRadius/BorderRadius/circular'} ],
			url:'BorderRadiusCircular' 
		},
		{ 
			keyword:'BorderRadius.horizontal(Radius left, Radius right)', 
			type:'BorderRadius', 
			pro:'水平圆角', 
			code:[ {path:'flutter/style/borderRadius/BorderRadius/horizontal'} ],
			link:[ {title:'Radius',url:'/flutter/style/borderRadius/Radius'} ],
			url:'BorderRadiusHorizontal' 
		},
		{ 
			keyword:'BorderRadius.vertical(Radius top, Radius bottom)', 
			type:'BorderRadius', 
			pro:'垂直圆角', 
			code:[ {path:'flutter/style/borderRadius/BorderRadius/vertical'} ],
			link:[ {title:'Radius',url:'/flutter/style/borderRadius/Radius'} ],
			url:'BorderRadiusVertical' 
		},
		{ 
			keyword:'BorderRadius.only(Radius topLeft, Radius topRight, Radius bottomLeft, Radius bottomRight)', 
			type:'BorderRadius', 
			pro:'单边圆角', 
			code:[ {path:'flutter/style/borderRadius/BorderRadius/only'} ],
			link:[ {title:'Radius',url:'/flutter/style/borderRadius/Radius'} ],
			url:'BorderRadiusOnly' 
		},
		{ 
			keyword:'BorderRadius.lerp(BorderRadius a, BorderRadius b, BorderRadius t)', 
			type:'BorderRadius', 
			code:[ {path:'flutter/style/borderRadius/BorderRadius/lerp'} ]
		},
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }