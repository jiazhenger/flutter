import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'定位，必须与 Stack 配合',
	keyword:'Positioned( )',
	type:'Positioned',
	data:[
		{ deviceTitle:'大小', keyword:'width', type:'double', pro:'宽，不能同时设 left、right' },
		{ keyword:'height', type:'double', pro:'高，不能同时高 top、bottom' },
		{ deviceTitle:'定位',keyword:'left', type:'double', pro:'左移' },
		{ keyword:'top', type:'double', pro:'上移' },
		{ keyword:'right', type:'double', pro:'右移' },
		{ keyword:'bottom', type:'double', pro:'下移' },
		{ deviceTitle:'控件',keyword:'child', type:'Widget', pro:'控件' },
		{ 
			noOrder:true ,pro:'示例',
			code:[ {path:'flutter/widget/layout/position/Positioned/Positioned'} ],
			link:[ {title:'Stack', url:'/flutter/layout/Stack'}]
		}
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }