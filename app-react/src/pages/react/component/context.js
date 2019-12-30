import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'context',
	data:[
		{ pro:'基本 context', code:[ {path:'react/component/context/base'} ]},
		{ keyword:'PropTypes', pro:'类型检查', code:[ {path:'react/component/context/PropTypes'} ]}
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }