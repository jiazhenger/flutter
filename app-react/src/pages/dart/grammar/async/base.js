import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'异步',
	data:[
		{ keyword:'async await', pro:'异步', code:[ {path:'dart/grammar/async/async'} ]},
		{ keyword:'then', pro:'异步回调', code:[ {path:'dart/grammar/async/then'} ]},
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }