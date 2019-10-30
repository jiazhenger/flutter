import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'滤镜',
	isGroup:true,
	data:[
		{
			title:'透明',
			keyword:'ColorFilter.linearToSrgbGamma( )',
			type:'ColorFilter',
			url:'ColorFilterPage'
		},
		{
			title:'加深',
			keyword:'ColorFilter.srgbToLinearGamma( )',
			type:'ColorFilter',
			url:'ColorFilterPage'
		},
		{
			title:'组合模式',
			keyword:'ColorFilter.mode( )',
			type:'ColorFilter',
			url:'ColorFilterPage',
			data:[
				{ keyword:'color', 		type:'Color ',  isValue:true, link:'/flutter/style/Colors' },
				{ keyword:'blendMode', 	type:'BlendMode  ',  isValue:true, link:'/flutter/image/BlendMode' },
				{ noOrder:true, pro:'示例', code:[ {path:'flutter/image/style/x/ColorFilter/mode'} ] },
			]
		},
		{
			title:'矩阵',
			keyword:'ColorFilter.matrix( )',
			type:'ColorFilter',
			url:'ColorFilterPage',
			data:[
				{ keyword:'matrix', 		type:'List<double> ',  isValue:true, code:[ {path:'flutter/image/style/x/ColorFilter/matrix'} ] }
			]
		},
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }