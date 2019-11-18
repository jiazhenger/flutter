import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'继承',
	data:[
		{ keyword:'class A extends B { }', pro:'继承一个类', code:[{ path:'dart/grammar/class/extends/one' }]},
		{ keyword:'class A extends B with C,D,E { }', pro:'扩展类', code:[{ path:'dart/grammar/class/extends/many' }]},
		{ keyword:'super', pro:'代表父类', code:[{ path:'dart/grammar/class/extends/super' }]}
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }