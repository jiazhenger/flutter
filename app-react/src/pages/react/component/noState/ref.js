import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'ref',
	data:[
		{ pro:'访问组件', code:[ {path:'react/component/noState/ref/component'} ]},
		{ pro:'访问 dom', code:[ {path:'react/component/noState/ref/dom'} ]},
		{ pro:'传递 ref', code:[ {path:'react/component/noState/ref/transmit'} ]},
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }