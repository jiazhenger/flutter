import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'单边样式',
	isGroup:true,
	data:[
		{
			title:'四边样式',
			keyword:'Border.all( )',
			type:'Border',
			url:'BorderAll',
			data:[
				{ keyword:'color', type:'Color', pro:'颜色', link:'/flutter/style/Colors'},
				{ keyword:'width', type:'double', pro:'宽度'},
				{ 
					keyword:'style', type:'BorderStyle', pro:'边框样式',
					code:[ {path:'flutter/public/borderStyle'} ],
				},
			]
		},
		{
			title:'边样式',
			keyword:'Border( )',
			type:'Border',
			url:'BorderOne',
			data:[
				{ keyword:'left', type:'BorderSide', pro:'左边', link:'/flutter/style/border/BorderSide'},
				{ keyword:'top', type:'BorderSide', pro:'上边', link:'/flutter/style/border/BorderSide'},
				{ keyword:'right', type:'BorderSide', pro:'右边', link:'/flutter/style/border/BorderSide'},
				{ keyword:'bottom', type:'BorderSide', pro:'下边', link:'/flutter/style/border/BorderSide'},
				{ noOrder:true, pro:'示例', code:[ {path:'flutter/style/border/Border/one'} ] },
			]
		},
		{
			title:'单边样式',
			keyword:'Border.fromBorderSide( )',
			type:'Border',
			data:[
				{ keyword:'side', type:'BorderSide', pro:'边框样式', isValue:true, link:'/flutter/style/border/BorderSide' },
				{ noOrder:true, pro:'示例', code:[ {path:'flutter/style/border/Border/fromBorderSide'} ] },
			]
		},
		{
			title:'合并边框',
			keyword:'Border.merge( )',
			type:'Border',
			data:[
				{ keyword:'a', type:'Border', pro:'一个边', isValue:true },
				{ keyword:'b', type:'Border', pro:'一个边', isValue:true },
				{ noOrder:true, pro:'示例', code:[ {path:'flutter/style/border/Border/merge'} ] },
			]
		},
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }