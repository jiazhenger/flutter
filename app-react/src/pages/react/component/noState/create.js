import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'创建组件方式',
	data:[
		{ pro:'无状态组件一', code:[ {path:'react/component/noState/create/1'} ]},
		{ pro:'无状态组件二', code:[ {path:'react/component/noState/create/2'} ]},
		{ pro:'无状态组件三', code:[ {path:'react/component/noState/create/3'} ]},
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }