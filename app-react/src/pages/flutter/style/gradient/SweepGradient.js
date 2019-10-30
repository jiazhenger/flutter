import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'环形渲染',
	keyword:'SweepGradient( )',
	url:'SweepGradientPage',
	data:[
		{ keyword:'colors', type:'List<Color>', pro:'颜色组', code:[ {path:'flutter/public/colors'} ],link:[ {title:'Color',url:'/flutter/style/Colors'} ] },
		{ keyword:'center', type:'Alignment', pro:'对齐方式', link:'/flutter/style/align/Alignment' },
		{ keyword:'startAngle', type:'double', pro:'开始角度',},
		{ keyword:'endAngle', type:'double', pro:'结束角度',},
		{ keyword:'stops', type:'List<double>', pro:'颜色占比', code:[ {path:'flutter/public/stops'} ] },
		{ keyword:'tileMode', type:'TileMode', pro:'模式', code:[ {path:'flutter/public/tileMode'} ] },
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }