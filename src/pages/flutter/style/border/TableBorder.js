import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'表格边框',
	isGroup:true,
	data:[
		{
			title:'全部加边框',
			keyword:'TableBorder.all( )',
			type:'TableBorder',
			url:'TablePage',
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
			title:'定义不同位置边框',
			keyword:'TableBorder.symmetric( )',
			type:'TableBorder',
			url:'TablePage',
			data:[
				{ keyword:'inside', type:'BorderSide', pro:'里面加边框', link:'/flutter/style/border/BorderSide'},
				{ keyword:'outside', type:'BorderSide', pro:'四周加边框', link:'/flutter/style/border/BorderSide' },
			]
		},
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }