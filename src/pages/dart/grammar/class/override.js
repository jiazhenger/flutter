import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'重写',
	data:[
		{ keyword:'extends @override', pro:'重写继承的方法', code:[{ path:'dart/grammar/class/override/extends' }]},
		{ keyword:'implements @override', pro:'重写接口的方法', code:[{ path:'dart/grammar/class/override/implements' }]}
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }