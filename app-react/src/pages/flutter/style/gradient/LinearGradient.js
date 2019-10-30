import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'线性渐变',
	keyword:'LinearGradient( )',
	url:'LinearGradientPage',
	data:[
		{ keyword:'colors', type:'List<Color>', pro:'颜色组', code:[ {path:'flutter/public/colors'} ],link:[ {title:'Color',url:'/flutter/style/Colors'} ] },
		{ keyword:'begin', type:'Alignment', pro:'开始', link:'/flutter/style/align/Alignment' },
		{ keyword:'end', type:'Alignment', pro:'结束', link:'/flutter/style/align/Alignment' },
		{ keyword:'stops', type:'List<double>', pro:'颜色占比', code:[ {path:'flutter/public/stops'} ] },
		{ keyword:'tileMode', type:'TileMode', pro:'模式', code:[ {path:'flutter/public/tileMode'} ] },
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }