import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'弹窗',
	data:[
		{ pro:'将弹窗渲染到根节点之外', code:[ {path:'react/ReactDOM/pop'} ]},
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }