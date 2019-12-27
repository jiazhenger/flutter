import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'弹窗',
	data:[
		{ pro:'将 children 放到指定节点', code:[ {path:'react/ReactDOM/pop'} ]},
		{ pro:'将 children 放到指定节点', code:[ {path:'react/ReactDOM/createPortal'} ]},
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }