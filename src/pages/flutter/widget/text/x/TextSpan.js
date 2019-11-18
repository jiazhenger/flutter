import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'一组文本',
	keyword:'TextSpan( )',
	type:'TextSpan',
	url:'TextSpanPage',
	data:[
		{ keyword:'text', type:'String', pro:'文本', isValue:true },
		{ keyword:'style', type:'TextStyle', pro:'文本样式', link:'/flutter/style/TextStyle' },
		{ keyword:'children', type:'List<InlineSpan>', pro:'多个拼接文本', code:[ {path:'flutter/widget/text/x/TextSpan/children'} ]  },
		{ keyword:'semanticsLabel', type:'String', pro:'语义描述', code:[ {path:'flutter/public/semanticsLabel'} ]},
		{ 
			keyword:'recognizer', 
			type:'GestureRecognizer', 
			pro:'手势事件',
			code:[ {path:'flutter/event/TapGestureRecognizer/on'} ],
			link:[ { title:'TapGestureRecognizer', url:'/flutter/event/TapGestureRecognizer'}]
		},
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }