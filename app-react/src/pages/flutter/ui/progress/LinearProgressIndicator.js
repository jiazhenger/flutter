import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'线性进度条',
	keyword:'LinearProgressIndicator( )',
	type:'LinearProgressIndicator',
	url:'LinearProgressIndicatorPage',
	data:[
		{ keyword:'value', type:'double', pro:'进度值，0~1' },
		{ keyword:'backgroundColor', type:'Color', pro:'轨道背景颜色', link:'/flutter/style/Colors' },
		{ 
			keyword:'valueColor', type:' Animation<Color>', pro:'进度条颜色',
			code:[ {path:'flutter/ui/progress/valueColor'} ],
			link:[ {title:'AlwaysStoppedAnimation', url:'/flutter/animation/AlwaysStoppedAnimation'} ]
		},
		{ keyword:'semanticsLabel', type:'String', pro:'语义描述标签', code:[ {path:'flutter/public/semanticsLabel'} ]},
		{ keyword:'semanticsValue ', type:'String', pro:'语义描述值'},
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }