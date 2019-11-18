import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'拼接多个样式的文本',
	keyword:'Text.rich( )',
	type:'Text',
	data:[
		{ 
			keyword:'texSpan', 
			type:'InlineSpan', 
			pro:'一组文本', 
			isValue:true,
			code:[ {path:'flutter/widget/text/Text.rich/texSpan'} ],
			link:[ { title:'TextSpan', url:'/flutter/text/TextSpan'}]
		},
		{ noOrder:true, pro:'Text 公共属性', link:'/flutter/text/Text' },
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }