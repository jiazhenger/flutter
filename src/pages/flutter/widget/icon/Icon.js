import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'Icon 图标',
	keyword:'Icon( )',
	type:'Icon',
	url:'IconPage',
	data:[
		{ keyword:'icon', type:'IconData', pro:'icon 名称', isValue:true, code:[{path:'flutter/widget/icon/icons'}] },
		{ keyword:'color', type:'Color', pro:'颜色', link:'/flutter/style/Colors' },
		{ keyword:'size', type:'double', pro:'尺寸' },
		{ keyword:'textDirection', type:'TextDirection', pro:'排列顺序', code:[ {path:'flutter/widget/text/TextDirection'} ] },
		{ keyword:'semanticsLabel', type:'String', pro:'icon 的语义描述', code:[ {path:'flutter/public/semanticsLabel'} ]},
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }