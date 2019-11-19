import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'分割线',
	grayText:'const',
	keyword:'Divider( )',
	type:'Divider',
	url:'DividerPage',
	data:[
		{ keyword:'color', type:'Color', pro:'线的颜色', link:'/flutter/style/Colors' },
		{ keyword:'height', type:'double', pro:'线高' },
		{ keyword:'indent', type:'double', pro:'缩进' },
		{ keyword:'endIndent', type:'double', pro:'边缘缩进' },
		{ keyword:'thickness', type:'double', pro:'线的厚度' }
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }