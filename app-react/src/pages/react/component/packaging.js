import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'组件封装',
	data:[
		{ keyword:'<Input.Textarea />', pro:'类封装', code:[ {path:'react/component/packaging/class'} ]},
		{ keyword:'<M.Input />', pro:'对象封装', code:[ {path:'react/component/packaging/obj'} ]},
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }