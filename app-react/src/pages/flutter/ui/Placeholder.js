import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'占位控件',
	keyword:'Placeholder( )',
	type:'Placeholder',
	url:'PlaceholderPage',
	data:[
		{ keyword:'color', type:'Color', pro:'颜色', link:'/flutter/style/Colors' },
		{ keyword:'fallbackWidth', type:'double', pro:'宽度' },
		{ keyword:'fallbackHeight', type:'double', pro:'高度' },
		{ keyword:'strokeWidth', type:'double', pro:'边线宽度' },
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }