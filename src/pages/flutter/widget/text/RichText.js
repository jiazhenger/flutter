﻿import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'拼接多个样式的文本',
	keyword:'RichText( )',
	type:'RichText',
	url:'RichTextPage',
	data:[
		{ keyword:'text', type:'InlineSpan', pro:'拼接文本' },
		{ noOrder:true, pro:'Text 公共属性', link:'/flutter/text/Text' },
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }