import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'标题',
	keyword:'Title( )',
	type:'Title',
	url:'TitlePage',
	data:[
		{ keyword:'color', type:'Color', pro:'背景色', link:'/flutter/style/Colors' },
		{ keyword:'child', type:'widget', pro:'列表标题' },
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }