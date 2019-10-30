import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'阴影',
	isGroup:true,
	data:[
		{
			title:'阴影',
			keyword:'Shadow( )',
			type:'Shadow',
			url:'ShadowPage',
			data:[
				{ keyword:'color', type:'Color', pro:'颜色', link: '/flutter/style/Colors' },
				{ keyword:'offset', type:'Offset', pro:'偏移', link:'/flutter/style/offset/Offset' },
				{ keyword:'blurRadius', type:'double', pro:'模糊度' },
			]
		},
		{ 
			title:'',
			type:'Shadow',
			keyword:'Shadow.convertRadiusToSigma( )',
			data:[
				{ keyword:'radius', isValue:true, type:'double', code:[ {path:'flutter/style/shadow/Shadow/convertRadiusToSigma'} ] },
			]
		},
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }