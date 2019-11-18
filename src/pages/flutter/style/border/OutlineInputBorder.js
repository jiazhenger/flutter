import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'表单元素边框样式',
	keyword:'OutlineInputBorder( )',
	type:'OutlineInputBorder',
	data:[
		{ keyword:'borderRadius', type:'const BorderRadius', pro:'圆角', link:'/flutter/style/borderRadius/BorderRadius' },
		{ keyword:'borderSide', type:'const BorderSide', pro:'边框', link:'/flutter/style/border/BorderSide' },
		{ keyword:'gapPadding', type:'double', pro:'间隙距离'}
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }