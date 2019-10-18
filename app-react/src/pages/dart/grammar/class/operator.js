import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'重载操作符',
	data:[
		{ keyword:'operator', pro:'重载操作符', code:[{ path:'dart/grammar/class/operator/base' }]},
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }