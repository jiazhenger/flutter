import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'MaterialButton 按钮',
	keyword:'MaterialButton( )',
	type:'MaterialButton',
	url:'MaterialButtonPage',
	data:[
		{ keyword:'text', type:'InlineSpan', pro:'拼接文本' },
		{ noOrder:true, pro:'Text 公共属性', link:'/flutter/text/Text' },
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }