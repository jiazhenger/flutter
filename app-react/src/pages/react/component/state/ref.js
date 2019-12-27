import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'ref',
	data:[
		{ pro:'访问组件', code:[ {path:'react/component/state/ref/component'} ]},
		{ pro:'访问 dom', code:[ {path:'react/component/state/ref/dom'} ]},
		{ pro:'直接传递 ref', code:[ {path:'react/component/state/ref/transmit-1'} ]},
		{ pro:'间接传递 ref', code:[ {path:'react/component/state/ref/transmit-2'} ]},
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }