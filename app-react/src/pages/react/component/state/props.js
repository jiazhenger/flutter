import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'props',
	data:[
		{ pro:'传递 props', code:[ {path:'react/component/state/props/send'} ]},
		{ pro:'获取 props', code:[ {path:'react/component/state/props/receive'} ]},
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }