import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'扫描式渐变',
	keyword:'RadialGradient( )',
	url:'RadialGradientPage',
	data:[
		{ keyword:'colors', type:'List<Color>', pro:'颜色组', code:[ {path:'flutter/public/colors'} ],link:[ {title:'Color',url:'/flutter/style/Colors'} ] },
		{ keyword:'center', type:'Alignment', pro:'对齐方式', link:'/flutter/style/align/Alignment' },
		{ keyword:'focal', type:'Alignment', pro:'焦点对齐', link:'/flutter/style/align/Alignment' },
		{ keyword:'radius', type:'double', pro:'半径'},
		{ keyword:'focalRadius', type:'double', pro:'焦点半径'},
		{ keyword:'stops', type:'List<double>', pro:'颜色占比', code:[ {path:'flutter/public/stops'} ] },
		{ keyword:'tileMode', type:'TileMode', pro:'模式', code:[ {path:'flutter/public/tileMode'} ] },
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }