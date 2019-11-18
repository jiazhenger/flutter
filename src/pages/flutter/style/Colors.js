import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'颜色样式',
	isGroup:true,
	data:[
		{
			title:'内置颜色',
			keyword:'Colors.x',
			type:'Color',
			url:'Colors',
			data:[
				{ noOrder:true, pro:'英文单词', code:[ {path:'flutter/style/Colors/Colors'} ] },
			]
		},
		{
			title:'十六进制颜色',
			keyword:'Color( )',
			type:'Color',
			url:'Color16',
			data:[
				{ keyword:'color', type:'Color', isValue:true, code:[ {path:'flutter/style/Colors/color16'} ] },
			]
		},
		{
			title:'rgba颜色',
			keyword:'Colors.fromRGBO( )',
			type:'Color',
			url:'Rgba',
			data:[
				{ keyword:'color', type:'Color', isValue:true, code:[ {path:'flutter/style/Colors/fromRGBO'} ] },
			]
		},
		{
			title:'argb颜色',
			keyword:'Colors.fromARGB( )',
			type:'Color',
			url:'Rgba',
			data:[
				{ keyword:'color', type:'Color', isValue:true, code:[ {path:'flutter/style/Colors/fromARGB'} ] },
			]
		},
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }