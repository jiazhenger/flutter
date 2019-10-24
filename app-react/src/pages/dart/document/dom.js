import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'时间声明',
	data:[
		{ pro:'选择器', code:[ {path:'dart/document/dom/selector'} ]},
		{ pro:'设置内容', code:[ {path:'dart/document/dom/innerText'} ]},
		{ pro:'添加样式', code:[ {path:'dart/document/dom/style'} ]},
		{ pro:'事件', code:[ {path:'dart/document/dom/event'} ]},
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }