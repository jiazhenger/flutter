import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'TextField 输入框',
	keyword:'TextField( )',
	type:'TextField',
	url:'TextFieldPage',
	data:[
		{ keyword:'dragStartBehavior', type:'DragStartBehavior', pro:'拖动行为', code:[{ path:'flutter/widget/form/TextField/DragStartBehavior'}] },
		{ keyword:'scrollPhysics', type:'ScrollPhysics', pro:'拖动行为', code:[{ path:'flutter/widget/form/TextField/ScrollPhysics'}] },
		{ 
			keyword:'scrollController', type:'ScrollController', pro:'滚动控件器', 
			code:[{ path:'flutter/widget/form/TextField/ScrollController'}],
			link:[{ title:'ScrollController', url:'/flutter/form/ScrollController'}]
		},
		{ keyword:'textAlignVertical', type:'TextAlignVertical', pro:'垂直对齐方式', code:[{ path:'flutter/public/TextAlignVertical'}] },
		{ keyword:'onSubmitted', type:'void Function( String )', pro:'提交时执行', code:[ {path:'flutter/widget/form/TextField/onSubmitted'} ] },
		{ noOrder:true, pro:'TextFormField 公共属性', link:'/flutter/form/TextFormField' },
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }