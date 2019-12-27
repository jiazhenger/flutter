import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'state',
	data:[
		{ pro:'声明 state', code:[ {path:'react/component/state/state/statement'} ]},
		{ pro:'更新 state', code:[ {path:'react/component/state/state/update'} ]},
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }