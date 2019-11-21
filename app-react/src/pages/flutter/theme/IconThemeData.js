import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'Icon 主题',
	isGroup:true,
	data:[
		{ title:'Icon 主题', keyword:'IconThemeData( )', type:'IconThemeData', 
			data:[
				{ keyword:'color', type:'Color', pro:'颜色', link:'/flutter/style/Colors' },
				{ keyword:'opacity', type:'double', pro:'透明度，0~1' },
				{ keyword:'size', type:'double', pro:'大小' },
			]
		},
		{ title:'', keyword:'IconThemeData.fallback( )',type:'IconThemeData'},
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }